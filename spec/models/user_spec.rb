require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'The user model should have many tickets' do
    it {should have_many(:tickets)}
  end

  it 'must have an email' do
    user = User.create
    expect(user.errors[:email]).to_not be_empty
  end

  it 'must have a created at time' do
    user = User.create
    expect(user.errors[:created_at]).to be_empty
  end

  it 'must have a unique email address' do
    should validate_uniqueness_of(:email).ignoring_case_sensitivity
  end

  it 'must have a reset password token' do
    user = User.create
    expect(user.errors[:reset_password_token]).to be_empty
  end

  it 'is database authenticable' do
    user = User.create(
      email: 'test@example.com', 
      password: 'password123',
      password_confirmation: 'password123'
    )
    expect(user.valid_password?('password123')).to be_truthy
  end

  it 'remembers the password created at time' do
    user = User.create
    expect(user.errors[:remember_created_at]).to be_empty
  end

end


