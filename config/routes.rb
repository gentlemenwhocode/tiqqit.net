Rails.application.routes.draw do
  resources :tickets
  devise_for :users, skip: [:sessions]
  as :user do
    get '/', to: 'devise/sessions#new', as: :new_user_session
    post 'sign_in_route', to: 'devise/sessions#create', as: :user_session
    get 'sign_out_route', to: 'devise/sessions#destroy', as: :destroy_user_session
  end
end


