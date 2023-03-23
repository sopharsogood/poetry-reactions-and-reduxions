class CommentSerializer
    def initialize(comment)
        @comment = comment
    end

    def to_serialized_json
        @comment.to_json(:include => {
            :author => {:only => [:username, :id]}
        }, :except => [:created_at, :updated_at, :poem_id])
        # excluding poem_id because this is only used if we already have the right poem
        # un-exclude poem_id if refactoring changes this
    end
end 