Rails.application.routes.draw do
  get 'whatwelookfor/index'
  get 'howitworks/index'
  get 'faqs/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  get 'about/index'
end
