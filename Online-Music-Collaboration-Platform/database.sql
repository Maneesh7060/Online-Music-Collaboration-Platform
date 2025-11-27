CREATE DATABASE musicdb;
USE musicdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);

CREATE TABLE musicfiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    filename VARCHAR(255),
    filepath VARCHAR(255),
    uploadedBy VARCHAR(100)
);
