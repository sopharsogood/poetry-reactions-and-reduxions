class PoemsController < ApplicationController
    def index
        poems = Poem.all
        render json: PoemSerializer.new(poems).to_serialized_json
    end
end