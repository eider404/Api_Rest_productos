CREATE DATABASE Tienda;
USE ApiRest;


CREATE TABLE `Product` (
  `id` INT(11) NOT NULL,
  `description` VARCHAR(64) DEFAULT NULL,
  `price` DECIMAL(10,0) DEFAULT NULL,
  `count` INT(11) DEFAULT NULL
);

INSERT INTO `Product` (`id`, `description`, `price`, `count`) VALUES
(1, 'Coca Cola', '15', 1),
(2, 'Emperador', '15', 2),
(3, 'Libro', '45', 3),
(4, 'Agua Cristal', '13', 4);
