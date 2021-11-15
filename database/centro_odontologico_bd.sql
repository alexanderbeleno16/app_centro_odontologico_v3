-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2021 a las 05:59:12
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `centro_odontologico_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consulta`
--

CREATE TABLE `consulta` (
  `conId` int(11) NOT NULL,
  `conFecha` datetime NOT NULL,
  `conDescri` varchar(250) DEFAULT NULL,
  `fechaHora` datetime DEFAULT NULL,
  `estado` varchar(15) DEFAULT 'activo',
  `odonId` int(11) NOT NULL,
  `paciId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `consulta`
--

INSERT INTO `consulta` (`conId`, `conFecha`, `conDescri`, `fechaHora`, `estado`, `odonId`, `paciId`) VALUES
(26, '2021-01-01 00:00:00', 'Muelas del juicio', '2021-11-14 23:31:16', 'activo', 15, 4),
(27, '2021-04-11 00:00:00', 'Brackets y retenedores', '2021-11-14 23:31:16', 'activo', 16, 5),
(28, '2021-11-01 00:00:00', 'Retenedores', '2021-11-14 23:31:16', 'activo', 17, 6),
(29, '2021-11-11 00:00:00', 'Extracción de incisivos', '2021-11-14 23:31:16', 'activo', 18, 7),
(30, '2021-07-12 00:00:00', 'Brackets', '2021-11-14 23:31:16', 'activo', 19, 8),
(31, '2021-06-09 00:00:00', 'Brackets', '2021-11-14 23:31:16', 'activo', 20, 9),
(32, '2021-11-10 00:00:00', 'Limpieza', '2021-11-14 23:31:16', 'activo', 21, 10),
(33, '2021-11-10 00:00:00', 'Limpieza', '2021-11-14 23:31:16', 'activo', 22, 11),
(34, '2021-01-01 00:00:00', 'Extracción de colmillos', '2021-11-14 23:31:16', 'activo', 23, 12),
(36, '2021-02-02 00:00:00', 'Muelas del juicio', '2021-11-14 23:31:32', 'activo', 21, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `facId` int(11) NOT NULL,
  `paciId` int(11) NOT NULL,
  `odonId` int(11) NOT NULL,
  `fechaHora` datetime DEFAULT NULL,
  `estado` varchar(15) DEFAULT 'activo',
  `conId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`facId`, `paciId`, `odonId`, `fechaHora`, `estado`, `conId`) VALUES
(7, 4, 15, '2021-11-14 00:00:00', 'activo', 26),
(8, 5, 16, '2021-11-14 00:00:00', 'activo', 27),
(9, 6, 17, '2021-11-14 00:00:00', 'activo', 28),
(10, 7, 18, '2021-11-14 00:00:00', 'activo', 29),
(11, 8, 19, '2021-11-14 00:00:00', 'activo', 30),
(12, 9, 20, '2021-11-14 00:00:00', 'activo', 31),
(13, 10, 21, '2021-11-14 00:00:00', 'activo', 32),
(14, 11, 22, '2021-11-14 00:00:00', 'activo', 33),
(15, 12, 23, '2021-11-14 00:00:00', 'activo', 34),
(17, 4, 15, '2021-11-14 00:00:00', 'activo', 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `odontologo`
--

CREATE TABLE `odontologo` (
  `odonId` int(11) NOT NULL,
  `odonDoc` int(30) NOT NULL,
  `odoNombres` varchar(50) NOT NULL,
  `odoApellido` varchar(60) NOT NULL,
  `odoEdad` varchar(10) NOT NULL,
  `odoTelefono` varchar(20) NOT NULL,
  `odoDireccion` varchar(60) NOT NULL,
  `odoCorreo` varchar(70) NOT NULL,
  `fechaHora` datetime DEFAULT NULL,
  `estado` varchar(15) DEFAULT 'activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `odontologo`
--

INSERT INTO `odontologo` (`odonId`, `odonDoc`, `odoNombres`, `odoApellido`, `odoEdad`, `odoTelefono`, `odoDireccion`, `odoCorreo`, `fechaHora`, `estado`) VALUES
(15, 122122, 'Juan', 'Melano', '19', '12121223', 'calle 23', 'jMel11@gmail.com', '2021-11-14 23:13:42', 'activo'),
(16, 78790, 'Pedro', 'Flores', '19', '12121223', 'calle 21', 'pedroF11@gmail.com', '2021-11-14 23:13:43', 'activo'),
(17, 86755, 'Lucho', 'Dias', '19', '12121223', 'calle 10', 'lDias98@gmail.com', '2021-11-14 23:13:43', 'activo'),
(18, 4456, 'Antonio', 'Velez', '19', '12121223', 'calle 05', 'aakka09@gmail.com', '2021-11-14 23:13:43', 'activo'),
(19, 3345, 'Elsa', 'Patíco', '19', '12121223', 'calle 8', 'elsaPatico666@gmail.com', '2021-11-14 23:13:43', 'activo'),
(20, 8811, 'Camilo', 'Ruiz', '19', '12121223', 'calle 45', 'crz21@gmail.com', '2021-11-14 23:13:43', 'activo'),
(21, 2733, 'Paula', 'Maldonado', '19', '12121223', 'calle 213', 'pMlua89@gmail.com', '2021-11-14 23:13:43', 'activo'),
(22, 44534543, 'Erica', 'Surita', '19', '12121223', 'calle 32', '9832hhas@gmail.com', '2021-11-14 23:13:43', 'activo'),
(23, 444262, 'Zacarias', 'Flores del Campo', '19', '12121223', 'calle 100', 'ZackZack89@gmail.com', '2021-11-14 23:13:43', 'activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `paciId` int(30) NOT NULL,
  `paciDoc` int(11) NOT NULL,
  `paciNombres` varchar(50) NOT NULL,
  `paciApellido` varchar(60) NOT NULL,
  `paciEdad` varchar(10) NOT NULL,
  `paciTelefono` varchar(20) NOT NULL,
  `paciDireccion` varchar(60) NOT NULL,
  `paciCorreo` varchar(70) NOT NULL,
  `fechaHora` datetime DEFAULT NULL,
  `estado` varchar(15) DEFAULT 'activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`paciId`, `paciDoc`, `paciNombres`, `paciApellido`, `paciEdad`, `paciTelefono`, `paciDireccion`, `paciCorreo`, `fechaHora`, `estado`) VALUES
(4, 9876567, 'Michael', 'Salazar', '29', '12121223', 'calle 24', 'oldOL@gmail.com', '2021-11-14 23:18:16', 'activo'),
(5, 765456, 'Elizabeth', 'Yatra', '39', '12121223', 'calle 24', 'frnrd@gmail.com', '2021-11-14 23:18:16', 'activo'),
(6, 1234654, 'Manuel', 'Herrera', '59', '12121223', 'calle 24', '9876@gmail.com', '2021-11-14 23:18:16', 'activo'),
(7, 4567654, 'Gabriel', 'Flores', '69', '12121223', 'calle 24', '3232@gmail.com', '2021-11-14 23:18:16', 'activo'),
(8, 3443333, 'Patricio', 'Star', '19', '12121223', 'calle 24', 'lolol@gmail.com', '2021-11-14 23:18:16', 'activo'),
(9, 344323, 'Luisa', 'Zambrano', '65', '12121223', 'calle 24', 'LZ2222@gmail.com', '2021-11-14 23:18:16', 'activo'),
(10, 765437, 'Pancho', 'Lopez', '54', '12121223', 'calle 24', 'LPEZ333@gmail.com', '2021-11-14 23:18:16', 'activo'),
(11, 23454321, 'Elba', 'Zurita', '33', '12121223', 'calle 24', 'ZuritaEl787@gmail.com', '2021-11-14 23:18:16', 'activo'),
(12, 45654323, 'Rosa', 'Meltroso', '11', '12121223', 'calle 24', 'Meltroso988@gmail.com', '2021-11-14 23:18:16', 'activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tratamiento`
--

CREATE TABLE `tratamiento` (
  `trataId` int(11) NOT NULL,
  `tipoTrata` varchar(100) NOT NULL,
  `trataDescri` varchar(250) NOT NULL,
  `trataPrecio` varchar(20) NOT NULL,
  `paciId` int(11) NOT NULL,
  `odonId` int(11) NOT NULL,
  `fechaHora` datetime DEFAULT NULL,
  `estado` varchar(15) DEFAULT 'activo',
  `conId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tratamiento`
--

INSERT INTO `tratamiento` (`trataId`, `tipoTrata`, `trataDescri`, `trataPrecio`, `paciId`, `odonId`, `fechaHora`, `estado`, `conId`) VALUES
(6, 'SACACIÓN DE MUELA :(', 'Le van a sacar una muela pues', '$80000', 4, 15, '2021-11-14 00:00:00', 'activo', 26),
(7, 'Brackets arriba y abajo', 'Brackets en todos los dientes arriba y abajo', '$40000', 5, 16, '2021-11-14 00:00:00', 'activo', 26),
(8, 'Muelas del juicio', 'Extracción de muelas de jucio arriba (sí) y abajo', '$70000', 6, 17, '2021-11-14 00:00:00', 'activo', 27),
(9, 'Brackets y retenedores', 'Brackets abajo y retenedores arriba', '$100000', 7, 18, '2021-11-14 00:00:00', 'activo', 28),
(10, 'Brackets', '', '$80000', 8, 19, '2021-11-14 00:00:00', 'activo', 29),
(11, 'SACACIÓN DE MUELA', 'Le van a sacar una muela pues', '$80000', 9, 20, '2021-11-14 00:00:00', 'activo', 30),
(12, 'Limpieza bucal', '', '$40000', 10, 21, '2021-11-14 00:00:00', 'activo', 31),
(13, 'Blanqueamiento dental', '', '$1000000', 11, 22, '2021-11-14 00:00:00', 'activo', 32),
(15, 'Blanqueamiento dental', '', '$1000000', 11, 22, '2021-11-14 00:00:00', 'activo', 30),
(18, 'Revisión dental', 'para futuros procesos', '$5000', 4, 15, '2021-11-14 00:00:00', 'activo', 30);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `consulta`
--
ALTER TABLE `consulta`
  ADD PRIMARY KEY (`conId`),
  ADD KEY `odonId` (`odonId`),
  ADD KEY `paciId` (`paciId`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`facId`),
  ADD KEY `odonId` (`odonId`),
  ADD KEY `paciId` (`paciId`),
  ADD KEY `conId` (`conId`);

--
-- Indices de la tabla `odontologo`
--
ALTER TABLE `odontologo`
  ADD PRIMARY KEY (`odonId`),
  ADD UNIQUE KEY `odonDoc` (`odonDoc`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`paciId`),
  ADD UNIQUE KEY `paciDoc` (`paciDoc`);

--
-- Indices de la tabla `tratamiento`
--
ALTER TABLE `tratamiento`
  ADD PRIMARY KEY (`trataId`),
  ADD KEY `odonId` (`odonId`),
  ADD KEY `paciId` (`paciId`),
  ADD KEY `conId` (`conId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `consulta`
--
ALTER TABLE `consulta`
  MODIFY `conId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `facId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `odontologo`
--
ALTER TABLE `odontologo`
  MODIFY `odonId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `paciId` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tratamiento`
--
ALTER TABLE `tratamiento`
  MODIFY `trataId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `consulta`
--
ALTER TABLE `consulta`
  ADD CONSTRAINT `consulta_ibfk_1` FOREIGN KEY (`odonId`) REFERENCES `odontologo` (`odonId`) ON DELETE CASCADE,
  ADD CONSTRAINT `consulta_ibfk_2` FOREIGN KEY (`paciId`) REFERENCES `paciente` (`paciId`) ON DELETE CASCADE;

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`odonId`) REFERENCES `odontologo` (`odonId`) ON DELETE CASCADE,
  ADD CONSTRAINT `factura_ibfk_2` FOREIGN KEY (`paciId`) REFERENCES `paciente` (`paciId`) ON DELETE CASCADE,
  ADD CONSTRAINT `factura_ibfk_3` FOREIGN KEY (`conId`) REFERENCES `consulta` (`conId`) ON DELETE CASCADE;

--
-- Filtros para la tabla `tratamiento`
--
ALTER TABLE `tratamiento`
  ADD CONSTRAINT `tratamiento_ibfk_1` FOREIGN KEY (`odonId`) REFERENCES `odontologo` (`odonId`) ON DELETE CASCADE,
  ADD CONSTRAINT `tratamiento_ibfk_2` FOREIGN KEY (`paciId`) REFERENCES `paciente` (`paciId`) ON DELETE CASCADE,
  ADD CONSTRAINT `tratamiento_ibfk_3` FOREIGN KEY (`conId`) REFERENCES `consulta` (`conId`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
