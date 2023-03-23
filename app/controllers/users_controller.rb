class UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).to_serialized_json
    end

    def show
        user = User.find(params[:id])
        render json: UserSerializer.new(user).to_serialized_json
    end

    def create
        user = User.create!(username: params[:username], password: params[:password])
        if user
            session[:user_id] = user.id
            render json: {user: user}
        else 
            render json: { status: 500 }
        end
    end
end