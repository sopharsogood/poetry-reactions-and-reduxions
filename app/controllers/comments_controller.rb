class CommentsController < ApplicationController
    def index
        # shows all comments *belonging to a specific poem*, not all comments globally 
        poem = Poem.find_by(id: params[:poem_id])
        comments = Poem.comments.all
        render json: CommentSerializer.new(comments).to_serialized_json
    end

    def show
        comment = Comment.find_by(id: params[:comment_id])
        render json: CommentSerializer.new(comments).to_serialized_json
    end
end