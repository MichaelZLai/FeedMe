class VisitsController < ApplicationController


  def create
    @visit = Visit.create!(visit_params)
    render json: @visit
    puts @visit
  end

 private
 def visit_params
   params.require(:visit).permit(:name)
 end
end
