class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.text :content
      t.integer :author_id
      t.integer :poem_id

      t.timestamps
    end
  end
end
