10.times do 
  
  d = Department.create(
    name: Faker::Company.name, 
    dep_type: Faker::Commerce.department
  )

  10.times do
    i = Item.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    department_id: d.id
    )

    10.times do
      Comment.create(
        title: Faker::Lorem.sentence(word_count: 3),
        body: Faker::Lorem.sentence(word_count: 25),
        item_id: i.id
      )

    end
  end

end

puts "Data Seeded"
