class VisitsController < ApplicationController


  def create
    @visit = Visit.find_or_create_by(visit_params)
    @visit.increment!(:count,1)

    render json: @visit
  end

 private
 def visit_params
   params.permit(:name,:address,:yelp_id,:phone)
 end
 
end
