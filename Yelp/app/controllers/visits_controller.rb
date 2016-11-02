class VisitsController < ApplicationController


  def create
    @visit = Visit.find_or_create_by(visit_params)
    @visit.increment!(:count,1)
    # @visit.save!

    render json: @visit

  #   if @visit.exists?
  #     @visit.count += 1
  #     @visit.save!
  #     render json: @visit
  #   else
  #     @visit = Visit.create!(visit_params)
  #     render json: @visit
  #     puts @visit
  #   end
  end

 private
 def visit_params
   params.permit(:name,:address,:yelp_id,:phone)
 end
end
