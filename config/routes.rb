Rails.application.routes.draw do
  root to: 'pages#home'

  get "/login", to: "pages#home"
  get "/values/new", to: "pages#home"

  #API
  namespace :api, defaults: { format: :json } do
    post "/login", to: "profiles#login"

    namespace :crypto do
      resources :btc, only: [:index]
      post "/btc", to: "btc#update_currencies"

      get "/btc/currencies", to: "btc#currencies"
    end
  end
end
