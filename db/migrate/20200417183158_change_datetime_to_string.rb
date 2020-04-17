class ChangeDatetimeToString < ActiveRecord::Migration[6.0]
  def change
    remove_column :tickets, :due_date, :datetime
    add_column :tickets, :due_date, :string
  end
end
