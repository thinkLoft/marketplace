-- seeds for user table

INSERT INTO user
  (firstName, lastName, email)
VALUES
  ("Parth", "Patel", "noemail@email.com");
INSERT INTO user
  (firstName, lastName, email)
VALUES
  ("Parth", "Gupta", "noemail@guptas.com");

-- seeds for products table

INSERT INTO products
  (image, title, description, category, price, email, sold)
VALUES
  ("https://bowwowinsurance.com.au/wp-content/uploads/2014/12/boxer-700x700.jpg", "Boxer", "house-trained", "pet", 1000.00, "someemail1@someemail1.com", false);

INSERT INTO products
  (image, title, description, category, price, email)
VALUES
  ("https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png", "HP Laptop", "15z touch, windows 10, 8gb", "electronics", 1500, "someemail2@someemail2.com");