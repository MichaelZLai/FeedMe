class VisitsController < ApplicationController


  def create
    @visit = Visit.create!(visit_params)
    render json: @visit
    puts @visit
  end

 private
 def visit_params
   params.permit(:name,:address,:yelp_id,:phone,:count)
 end
end
