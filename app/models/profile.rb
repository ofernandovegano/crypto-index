class Profile < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { is: 6 }
end
