DROP DATABASE IF exists companydb;
CREATE DATABASE companydb CHARSET utf8mb4;
USE companydb;

CREATE TABLE users (
    id_news INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employee VALUES
    (1, 'Peter', 1000),
    (2, 'Mike', 2000),
    (3, 'John', 1500),
    (4, 'Liza', 1800),
    (5, 'Susan', 1000)