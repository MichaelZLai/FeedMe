Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'foods#index'
  post '/search' => 'foods#search'
  resources :foods, :visits
end
