class PoemSerializer
    def initialize(poem)
        @poem = poem
    end

    def to_serialized_json
        @poem.to_json(:include => {
            :author => {:only => [:username, :id]}
        }, :except => [:created_at, :updated_at])
    end
end 