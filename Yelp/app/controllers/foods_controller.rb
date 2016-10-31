class FoodsController < ApplicationController

  def index
    @foods = Food.all
    render json: @foods
  end

  # def search(location)
  #   params.merge!({location: location})
  #
  #   Response::Search.new(JSON.parse(search_request(params).body))
  # end

  def show
    @food = Food.find(params[:id])
    @params = {term: 'food', limit: 20}
    @results = render json: Yelp.client.search(@food.location, @params )
    puts @food
  end


  def create
    @food = Food.create!(food_params)
    @params = {term: 'food', limit: 20}
    @results = render json: Yelp.client.search(@food.location, @params )
  end

  def new
    @food = Food.new
  end
  
 private
 def food_params
   params.require(:food).permit(:location)
 end
end
