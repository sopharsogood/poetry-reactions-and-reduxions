# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

byron = User.create(username: "Lord Byron", password: "THElord")
charlotte = User.create(username: "Bronte the Poet", password: "longnameshortwork")
burmashave = Poem.create(author: byron, title: "Burma Shave", content: "When applicating / Why not try / Rails for backend / API? / Burma shave")
seeds = Poem.create(author: charlotte, title: "Seeds", content: "Are we real? Or just jotted-down seeds?")
Comment.create(poem: seeds, author: byron, content: "This doesn't mean anything. Obviously I am the real Lord Byron writing this.")
Comment.create(poem: burmashave, author: charlotte, content: "A fresh twist on an old classic")
Comment.create(poem: burmashave, author: byron, content: "Possibly my finest work")