CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

CREATE TABLE employees(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);