class AppController < ApplicationController
  def show
    p ENV['MAPS_KEY']
    p ENV
    render :'apps/show'
  end
end
