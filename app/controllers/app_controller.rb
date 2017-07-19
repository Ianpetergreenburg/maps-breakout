class AppController < ApplicationController
  def show
    p ENV['MAPS_KEY']
    render :'apps/show'
  end
end
