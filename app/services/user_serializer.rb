class UserSerializer
    def initialize(user)
        @user = user
    end

    def to_serialized_json
        @user.to_json(:include => {
            :username,
            :id,
        }, :except => [:created_at, :updated_at, :password_digest])
    end
end 