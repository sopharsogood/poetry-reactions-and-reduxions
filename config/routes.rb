Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :poems do
    resources :comments
    get '/comments/:id/new', to: 'comments#new', as: 'new_comment_reply'
    post '/comments/:id/new', to: 'comments#create'
  end
  resources :users

end
