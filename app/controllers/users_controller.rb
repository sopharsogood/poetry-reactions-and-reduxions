class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, except: [:password_digest, :created_at, :updated_at]
    end
end