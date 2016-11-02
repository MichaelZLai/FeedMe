class AddAdditionalColumnsToVisits < ActiveRecord::Migration[5.0]
  def change
      add_column :visits, :address, :string
      add_column :visits, :phone, :string
      add_column :visits, :yelp_id, :string
      add_column :visits, :count, :integer
  end
end
