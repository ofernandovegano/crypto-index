class Api::Crypto::BtcController < ApplicationController
  skip_before_action :verify_authenticity_token
end
