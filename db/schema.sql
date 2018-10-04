DROP DATABASE IF EXISTS marketplacedb;
CREATE DATABASE marketplacedb;

USE marketplacedb;

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
userID MEDIUMINT NOT NULL,
sold boolean DEFAULT FALSE,
primary key
        (id),
constraint fk_userID foreign key
        (userID)
references user
        (userID)
on
        delete cascade on
        update cascade);


        select *
        from products;