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

CREATE TABLE categoria(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(18)
);

INSERT INTO `datosprovedores`.`categoria`
(`nombre`)
VALUES
(
'Moto');

INSERT INTO `datosprovedores`.`categoria`
(`nombre`)
VALUES
(
'Carro');

ALTER TABLE `datosprovedores`.`vehiculo` 
ADD COLUMN `id_categoria` INT(11) NULL AFTER `descripcion`,
ADD INDEX `fk_vehiculo_categoria_idx` (`id_categoria` ASC) VISIBLE;
;
ALTER TABLE `datosprovedores`.`vehiculo` 
ADD CONSTRAINT `fk_vehiculo_categoria`
  FOREIGN KEY (`id_categoria`)
  REFERENCES `datosprovedores`.`categoria` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
