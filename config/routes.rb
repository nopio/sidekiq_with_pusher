Rails.application.routes.draw do
  root 'home#index'
  get 'home/download'
  get 'home/upload'
end
