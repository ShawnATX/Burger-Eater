DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id AUTO_INCREMENT INT NOT NULL,
    burger_name VARCHAR(75),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);

