class CreateDepartments < ActiveRecord::Migration[6.0]
  def change
    create_table :departments do |t|
      t.string :name
      t.string :dep_type

      t.timestamps
    end
  end
end
