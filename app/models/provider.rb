class Provider < ActiveRecord::Base
  belongs_to :user

  module Association
    def find_or_create auth
      provider = where(provider:auth.provider, uid:auth.uid).first
      provider ||= create!(provider:auth.provider, uid:auth.uid)
    end
  end
end
