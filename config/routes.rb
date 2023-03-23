Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :poems do
      resources :comments
    end
    resources :users, only: [:create, :show, :index]
    resources :sessions, only: [:create]
    delete :logout, to: "sessions#logout"
  end
end
