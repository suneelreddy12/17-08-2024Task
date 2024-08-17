// 1) Find all the information about each product
db.products.find();

// 2) Find the product prices which are between 400 to 800
db.products.find({ product_price: { $gte: 400, $lte: 800 } });

// 3) Find the product prices which are not between 400 to 600
db.products.find({ product_price: { $not: { $gte: 400, $lte: 600 } } });

// 4) List the four products which are greater than 500 in price
db.products.find({ product_price: { $gt: 500 } }).limit(4);

// 5) Find the product name and product material of each product
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 });
// "product_name": 1: Includes the product_name field in the output.
// "product_material": 1: Includes the product_material field in the output.
// "_id": 0: Excludes the _id field from the output (by default, _id is included if not explicitly excluded).

// 6) Find the product with a row id of 10
db.products.find({ id: "10" });

// 7) Find only the product name and product material for the product with id 10
db.products.find({ id: "10" }, { product_name: 1, product_material: 1, _id: 0 });

// 8) Find all products which contain the value "Soft" in product material
db.products.find({ product_material: "Soft" });

// 9) Find products which contain product color "indigo" and product price 492.00
db.products.find({ product_color: "indigo", product_price: 492.0 });

// 10) Delete the products which have a product price value of 28
db.products.deleteMany({ product_price: 28.0 });
