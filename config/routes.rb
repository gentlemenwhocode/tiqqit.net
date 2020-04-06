Rails.application.routes.draw do
  resources :tickets
  devise_for :users
  get '*path', to: 'index#root', constraints: ->(request){ request.format.html? }
  root to: "index#index"
end
