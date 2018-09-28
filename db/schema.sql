DROP DATABASE IF EXISTS marketplacedb;
CREATE DATABASE marketplacedb;

USE marketplacedb;

CREATE TABLE products
(
  id MEDIUMINT
  AUTO_INCREMENT NOT NULL,
image VARCHAR
  (2000) NOT NULL,
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
sold boolean DEFAULT FALSE,
primary key
  (id)
);

  select *
  from products;

  CREATE TABLE user
  (
    userID MEDIUMINT
    AUTO_INCREMENT NOT NULL,
firstName VARCHAR
    (255) NOT NULL,
lastName VARCHAR
    (255) NOT NULL, 
email VARCHAR
    (255) NOT NULL,
password VARCHAR
    (100) NOT NULL,
primary key
    (userID)
);

    select *
    from user;