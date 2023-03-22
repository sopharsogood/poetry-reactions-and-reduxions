class PoemsController < ApplicationController
    def index
        poems = Poem.all
        render json: poems.to_json(:include => {
            :author => {:only => [:username, :id]}
        })
    end
end