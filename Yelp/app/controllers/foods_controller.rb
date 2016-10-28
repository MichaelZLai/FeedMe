class FoodsController < ApplicationController

  def index
    @foods = Food.all
  end

  def show
    @food = Food.find(params[:id])
    @params = {term: 'food', limit: 16}
    @results = render json: Yelp.client.search(@food.location, @params )
    puts @food
  end

  def new
    @food = Food.new
  end

  def create
    @food = Food.create!(food_params)

    redirect_to food_path(@food)
  end

 private
 def food_params
   params.require(:food).permit(:location)
 end
end
