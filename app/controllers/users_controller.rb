class UsersController < ApplicationController
    def index
        users = User.all
        serialized_users = users.map{ |user| UserSerializer.new(user).to_serialized_json }
        render json: serialized_users
    end
end