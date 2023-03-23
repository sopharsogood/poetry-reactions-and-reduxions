class Api::V1::SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {user: user}
        else
            render json: { status 401 }
        end
    end
    
    def logout
        reset_session
        render json: { status: 200, user: null }
    end
end