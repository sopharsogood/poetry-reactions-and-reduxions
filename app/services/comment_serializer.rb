class CommentSerializer
    def initialize(comment)
        @comment = comment
    end

    def to_serialized_json
        @comment.to_json(:include => {
            :author => {:only => [:username, :id]}
        }, :except => [:created_at, :updated_at, :poem_id])
    end
end 