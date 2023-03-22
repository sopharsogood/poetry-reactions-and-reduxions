class User < ApplicationRecord
    has_many :poems, class_name: "Poem", foreign_key: "author_id"
    has_many :comments, class_name: "Comment", foreign_key: "author_id"

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
