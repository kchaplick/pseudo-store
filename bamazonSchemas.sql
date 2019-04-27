CREATE DATABASE bamazon_db

USE bamazon_db;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  dept_name VARCHAR(30),
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("teddy bear", "toys", 10, 50);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("t-shirt", "clothing", 18, 100);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("diamond necklace", "jewelry", 500, 5);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("skirt", "clothing", 24, 20);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("sheets", "home", 45, 12);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("pillows", "home", 6, 28);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("robot", "toys", 70, 9);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("pearl earrings", "jewelry", 200, 6);