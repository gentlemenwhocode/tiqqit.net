class RemoveTypeColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :tickets, :type, :prob_cat
  end
end
