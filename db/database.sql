CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
(1, 'Jose', 1000),
(2, 'maria', 1500),
(3, 'eduardo', 2000),
(4, 'yineth', 2500);
