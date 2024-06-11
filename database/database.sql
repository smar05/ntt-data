CREATE DATABASE datosProvedores;

USE datosProvedores;

CREATE TABLE vehiculo(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(18),
    modelo VARCHAR(180),
    estado TINYINT(1),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    marca VARCHAR(180)
);

DESCRIBE vehiculo;