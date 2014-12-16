require "open-uri"

class User < ActiveRecord::Base
  devise :database_authenticatable, :trackable, :omniauthable, :confirmable, :recoverable, :registerable, :rememberable

  has_many :providers, :extend => Provider::Association
  has_many :points
  has_many :languages

  validates :screen_name, :uniqueness => true, :allow_blank => true
  validates :email, :uniqueness => true, :allow_blank => true
  validates :github, :uniqueness => true, :allow_blank => true

  def as_json(options)
    super(options.merge(methods: [:current_languages]))
  end

  def self.provider(auth, provider_id)

    auth_uid = auth.uid
    find_hash = { auth_uid: auth_uid } if auth_uid.present?
    find_hash = { email: auth.info.email } if auth.info.email

    github = ""
    if provider_id == :github
      github = auth.info.nickname
      find_hash = { github: github }
    end

    first_name = auth.info.first_name.presence || auth.info.name.split.first || ""
    last_name = auth.info.last_name.presence || auth.info.name.split.last || ""

    raise "Not enough information provided" unless find_hash.present?

    user = where(find_hash).first
    transaction do
      if user
        user.update_attribute :first_name, first_name if first_name.present?
        user.update_attribute :last_name, last_name if last_name.present?
        user.update_attribute :auth_uid, auth_uid unless user.auth_uid.present?
        user.update_attribute :confirmed_at, DateTime.now unless user.confirmed_at.present?
      else
        create_hash = { auth_uid: auth_uid, github: github, first_name: first_name, last_name: last_name, password: Devise.friendly_token[0,20], :confirmed_at => DateTime.now }
        create_hash[:email] = auth.info.email.presence
        user = User.create!(create_hash)
      end

      github_info = auth.extra.raw_info.slice(*%w(avatar_url blog location hireable public_repos public_gists followers following))

      user.avatar_url = github_info["avatar_url"]
      user.blog = github_info["blog"]
      user.location = github_info["location"]
      user.hireable = github_info["hireable"]
      user.public_repos = github_info["public_repos"]
      user.public_gists = github_info["public_gists"]
      user.followers = github_info["followers"]
      user.following = github_info["following"]

      user.save!

      user.providers.find_or_create(auth)
    end
  end

  def current_languages
    languages.map(&:language)
  end

  def update_github
    repos = ActiveSupport::JSON.decode open("https://api.github.com/users/#{github}/repos").read
    all_gh_languages = repos.map { |e| e["language"] }.uniq.compact
    new_languages = all_gh_languages - current_languages
    new_languages.each do |nl|
      self.languages << Language.create(language: nl)
    end
  end

  protected
  def confirmation_required?
    false
  end
end
