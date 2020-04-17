class Ticket < ApplicationRecord
  #Relational table reference
  belongs_to :user

  #   Validations to check for presence
   validates :title, :project_cat, :prob_cat, :priority, :desc, :due_date, :status, presence: true

  #   Validates that the title length is atleast 3.
  validates :title, length: { minimum: 3, message: "Title must be 3 characters or longer!" } 

  #   Allows images to be attached to ticket and processed through AWS S3
  has_one_attached :image
end
