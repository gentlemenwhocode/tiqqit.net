class CreateTickets < ActiveRecord::Migration[6.0]
  def change
    create_table :tickets do |t|
      t.string :title
      t.string :project_cat
      t.string :type
      t.integer :priority
      t.text :desc
      t.string :status
      t.datetime :due_date
      t.text :image
      t.text :comments
      t.integer :user_id

      t.timestamps
    end
  end
end
