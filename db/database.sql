DROP DATABASE IF exists companydb;
CREATE DATABASE companydb CHARSET utf8mb4;
USE companydb;

CREATE TABLE users (
    id_news INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY(id)
);