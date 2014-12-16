class UsersController < ApplicationController
  def index
    online = current_user ? User.all : []
    render json: online
  end
end
