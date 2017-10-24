class HomeController < ApplicationController
  def index
  end

  def generate
    FileBuilder.new.call
    head :ok
  end
end
