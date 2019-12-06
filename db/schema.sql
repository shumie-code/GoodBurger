-- Create database in MYSQL
CREATE DATABASE burgers_db;
-- Initialze the use of burgers_db in database
USE burgers_db;
-- Create burgers tables 
CREATE TABLE burgers (
    id INT NOT NULL auto_increment,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
