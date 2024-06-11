CREATE DATABASE datosProvedores;

USE datosProvedores;

CREATE TABLE vehiculo(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(18),
    modelo VARCHAR(180),
    estado VARCHAR(180),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    marca VARCHAR(180),
    descripcion VARCHAR(360),
);

DESCRIBE vehiculo;