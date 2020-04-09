class Ticket < ApplicationRecord
  #Relational table reference
  belongs_to :user

  #   Validations to check for presence
  validates :title, :project_cat, :prob_cat, :priority, :desc, :status, :due_date, presence: true

  #Validates that the title length is atleast 3.
  validates :title, length: { minimum: 3 }
end
