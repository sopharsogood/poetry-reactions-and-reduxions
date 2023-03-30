class PoemsController < ApplicationController
    def index
        poems = Poem.all
        render json: PoemSerializer.new(poems).to_serialized_json
    end

    def show
        poem = Poem.find(params[:id])
        render json: PoemSerializer.new(poem).to_serialized_json_with_comments
    end
end