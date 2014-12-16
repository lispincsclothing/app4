class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    provider :facebook
  end

  def github
    provider :github
  end

  def twitter
    provider :twitter
  end

  def google_apps
    provider :google_apps
  end

  private
  def after_sign_in_path_for(resource)
    session[:redirect] || root_path
  end

  def provider provider_id
    @user = User.provider(request.env["omniauth.auth"], provider_id).user
    session["devise.#{provider_id}_data"] = request.env["omniauth.auth"]
    flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => (provider_id == :google_apps ? :gmail : provider_id).to_s.titleize

    if session[:entries].present?
      Entry.where(:id => session[:entries]).update_all ["user_id = ?", @user.id]
      session[:entries] = nil
    end

    sign_in_and_redirect @user.reload, :event => :authentication
  end
end
