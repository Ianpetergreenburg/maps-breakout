Rails.application.routes.draw do
  root to: 'app#show'
  get '/index', to: 'app#show'
end
