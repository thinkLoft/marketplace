-- seeds for user table

INSERT INTO user
  (firstName, lastName, email, password)
VALUES
  ("Parth", "Patel", "noemail@email.com", "nopassword123");

-- seeds for products table

INSERT INTO products
  (image, title, description, category, price, userID, sold)
VALUES
  ("https://bowwowinsurance.com.au/wp-content/uploads/2014/12/boxer-700x700.jpg", "Boxer", "house-trained", "pet", 1000.00, 1, false);

INSERT INTO products
  (image, title, description, category, price, userID)
VALUES
  ("https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png", "HP Laptop", "15z touch, windows 10, 8gb", "electronics", 1500, 1);