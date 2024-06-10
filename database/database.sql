CREATE DATABASE datosProvedores;

USE datosProvedores;

CREATE TABLE provedor(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    direccion VARCHAR(255),
    correo VARCHAR(180),
    vehiculos INT(11),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE provedor;

CREATE TABLE vehiculo(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(18),
    modelo VARCHAR(180),
    idConductor INT(11),
    nombreConductor VARCHAR(180),
    estado TINYINT(1),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE vehiculo;