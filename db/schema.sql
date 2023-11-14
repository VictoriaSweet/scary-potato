DROP DATABASE IF EXISTS plants_db;
CREATE DATABASE plants_db;

USE plants_db;

CREATE TABLE plants (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    plant_name VARCHAR(30) NOT NULL,
    edible BOOLEAN NOT NULL,
    poisonous BOOLEAN NOT NULL,
    cycle VARCHAR(30) NOT NULL,
    watering VARCHAR(30) NOT NULL,
    sunlight VARCHAR(30) NOT NULL,
    indoor BOOLEAN NOT NULL
);
