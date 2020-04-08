Rails.application.routes.draw do
  resources :tickets
  devise_for :users
  get '*path', to: 'index#index', constraints: ->(request){ request.format.html? } 
  root to: 'index#index'
  # as :user do
  #   post 'sign_in_route', to: 'devise/sessions#create', as: :user_session
  #   get 'sign_out_route', to: 'devise/sessions#destroy', as: :destroy_user_session
  #   get '/', to: 'devise/sessions#new', as: :new_user_session

end


