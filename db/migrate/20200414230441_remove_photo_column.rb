class RemovePhotoColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :tickets, :photo
  end
end
