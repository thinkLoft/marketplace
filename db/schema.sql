-- DROP DATABASE IF EXISTS marketplacedb;
CREATE DATABASE marketplacedb;

USE marketplacedb;

CREATE TABLE user
(
        userID mediumint
        auto_increment,
firstName VARCHAR
        (255) NOT NULL,
lastName VARCHAR
        (255) NOT NULL, 
  email VARCHAR
        (255) NOT NULL,
key
        (userID),
primary key
        (email)
);

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
email VARCHAR
                (255) NOT NULL,
sold boolean DEFAULT FALSE,
primary key
                (id),
constraint fk_email foreign key
                (email)
references user
                (email)
on
                delete cascade on
                update cascade);