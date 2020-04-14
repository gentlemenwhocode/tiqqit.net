class Ticket < ApplicationRecord
  #Relational table reference
  belongs_to :user

  #   Validations to check for presence
  validates :title, :project_cat, :prob_cat, :priority, :desc, :status, presence: true

  #Validates that the title length is atleast 3.
  validates :title, length: { minimum: 3 }

  #Allows images to be attached to ticket and processed through AWS S3
  # has_one_attached :image
end
