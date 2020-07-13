-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 13-07-2020 a las 02:14:52
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_great_pizza`
--
CREATE DATABASE IF NOT EXISTS `db_great_pizza` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `db_great_pizza`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pizza`
--

DROP TABLE IF EXISTS `pizza`;
CREATE TABLE IF NOT EXISTS `pizza` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pizza`
--

INSERT INTO `pizza` (`id`, `name`) VALUES
(1, 'Hawaiian'),
(2, 'Peperoni'),
(5, 'Extra Cheess'),
(17, 'Pizza 11'),
(35, 'Alcachofas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pizzatopping`
--

DROP TABLE IF EXISTS `pizzatopping`;
CREATE TABLE IF NOT EXISTS `pizzatopping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idPizza` int(11) NOT NULL,
  `idTopping` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pizzatopping`
--

INSERT INTO `pizzatopping` (`id`, `idPizza`, `idTopping`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 5, 1),
(5, 6, 1),
(6, 5, 3),
(7, 8, 1),
(8, 2, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `topping`
--

DROP TABLE IF EXISTS `topping`;
CREATE TABLE IF NOT EXISTS `topping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `topping`
--

INSERT INTO `topping` (`id`, `name`) VALUES
(1, 'Ham'),
(2, 'Pineapple'),
(3, 'Peperoni'),
(7, 'Tomatoe');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
