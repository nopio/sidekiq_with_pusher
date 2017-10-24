Rails.application.routes.draw do
  root 'home#index'
  post 'home/generate'
end
