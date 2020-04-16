require 'rails_helper'

RSpec.describe User, type: :model do


  describe 'The user model should have many tickets' do
    it {should have_many(:tickets)}
  end

end
