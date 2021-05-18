Rails.application.routes.draw do
  root to: 'pages#home'

  #API
  namespace :api, defaults: { format: :json } do
    post "/login", to: "profiles#login"
  end
end
