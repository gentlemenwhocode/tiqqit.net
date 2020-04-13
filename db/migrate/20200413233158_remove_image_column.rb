class RemoveImageColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :tickets, :image
  end
end
