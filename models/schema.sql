-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;

DROP DATABASE IF EXISTS productsdb;
CREATE DATABASE
IF NOT EXISTS productsdb;
USE productsdb;

CREATE TABLE products
(
  id MEDIUMINT
  AUTO_INCREMENT NOT NULL,
    title VARCHAR
  (100) NOT NULL, 
    description VARCHAR
  (255) NOT NULL,
    category VARCHAR
  (100) NOT NULL,
    price DECIMAL
  (10,2) NOT NULL,  
    userID VARCHAR
  (100) NOT NULL,
    sold BOOL DEFAULT FALSE,
    primary key
  (id)
);

  select *
  from products;

  INSERT INTO products
    (title, description, category, price, userID)

  VALUES
    ("Boxer", "house-trained", "pet", 1000.00, 123),
    ("Sofa Set", "3 Piece Sofa Set", "furniture", 1999.89, 234);


  select *
  from products;