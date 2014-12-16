Rails.application.routes.draw do

  get '/users' => 'users#index'

  get 'github/index'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  root to: 'github#index'

end
