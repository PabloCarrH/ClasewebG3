DROP DATABASE IF EXISTS holaparce;
CREATE DATABASE holaparce;
USE holaparce;

-- Crear la tabla principal de usuarios
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);
select * from users;