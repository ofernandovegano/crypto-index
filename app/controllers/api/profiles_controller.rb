class Api::ProfilesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def login
    user = Profile.where(email: params[:email]) 

    if /.*@.*/.match(params[:email]) == nil || /^\d{6}$/.match(params[:password]) == nil
     return render json: { message: "Campos inválidos" },  status: :bad_request
    end


    if !user.first
      user = Profile.create(profile_params)
    end
 
    return render json: { token: rand(36**16).to_s(36) }, status: :ok
  end

  private

  def profile_params
    params.require(:profile).permit(:email, :password)
  end
end