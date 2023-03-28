# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Poem.destroy_all
User.destroy_all

byron = User.create(username: "Lord Byron", password: "THElord")
charlotte = User.create(username: "Bronte the Poet", password: "longnameshortwork")
plath = User.create(username: "Sylvia", password: "PLATH")
wilde = User.create(username: "Oscar Wilde", password: "ernestwriting")
reader = User.create(username: "poetryfan99", password: "justreadinG")

burmashave = Poem.create(author: byron, title: "Burma Shave", content: "When applicating / Why not try / Rails for backend / API? / Burma shave")
seeds = Poem.create(author: charlotte, title: "Seeds", content: "Are we real? Or just jotted-down seeds?")
gaol = Poem.create(author: wilde, title: "The Ballad of Reading Gaol", content: "For each man kills the thing he loves\r\nBy each let this be heard\r\nSome do it with a bitter look\r\nSome with a flattering word\r\nThe coward does it with a kiss\r\nThe brave man with a sword")
haiku = Poem.create(author: plath, title: "Themes of Nature", content: "Although spring is here\r\nAutumn will return once more\r\nYears like poems are short")
ruins = Poem.create(author: plath, title: "The Ruins", content: "I went to the ruins\r\nAnd wept\r\nFor what I saw\r\nWas myself")
once = Poem.create(author: plath, title: "Once", content: "I ate a bagel\r\nAnd wondered\r\nWhen the last bagel\r\nI ever eat\r\nWill be")
ozy = Poem.create(author: byron, title: "Ozymandias", content: "I met a traveler from an antique land\r\nBut I didn't listen to what he said")

Comment.create(poem: seeds, author: byron, content: "This doesn't mean anything. Obviously I am the real Lord Byron writing this.")
Comment.create(poem: burmashave, author: charlotte, content: "A fresh twist on an old classic")
Comment.create(poem: burmashave, author: byron, content: "Possibly my finest work")
Comment.create(poem: gaol, author: wilde, content: "I think this should be longer")
Comment.create(poem: haiku, author: charlotte, content: "I love it!")
Comment.create(poem: haiku, author: charlotte, content: "Seriously, this is really good")
Comment.create(poem: haiku, author: byron, content: "I don't know what a haiku is")
Comment.create(poem: gaol, author: plath, content: "This is sad and involves death, so I like it")
Comment.create(poem: haiku, author: wilde, content: "I don't understand it, which means it is deep and brilliant.")
Comment.create(poem: ozy, author: wilde, content: "I liked Shelley's version better.")
Comment.create(poem: ozy, author: reader, content: "Not your best work but still pretty good!")
Comment.create(poem: haiku, author: reader, content: "Anyone can count syllables")
Comment.create(poem: gaol, author: reader, content: "I didn't kill the thing I love so I don't think this is true")
Comment.create(poem: burmashave, author: reader, content: "Has anyone seen the original or is everyone just referencing each other's references? I don't see the point in making in-jokes about something where nobody involved is actually in on the joke. This is a yesteryear meme we've latched onto for no reason.")
Comment.create(poem: burmashave, author: charlotte, content: "I don't get it because I will have died before this ad campaign happens")