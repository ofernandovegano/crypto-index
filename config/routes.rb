Rails.application.routes.draw do
  root to: 'pages#home'

  get "/login", to: "pages#home"

  #API
  namespace :api, defaults: { format: :json } do
    post "/login", to: "profiles#login"

    namespace :crypto do
      resources :btc, only: [:index]
    end
  end
end
