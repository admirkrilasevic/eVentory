/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 10.4.24-MariaDB : Database - lab11
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`lab11` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `lab11`;

/*Table structure for table `items` */

DROP TABLE IF EXISTS `items`;

CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*Data for the table `items` */

insert  into `items`(`id`,`name`,`description`,`quantity`,`price`) values 
(1,'White T-shirt','Basic white cotton T-shirt',2,5.5),
(5,'Brown leather shoes','Made from finest leather',3,20),
(6,'Leather jacket','Black leather jacket',5,25);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `is_admin` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`id`,`firstName`,`lastName`,`email`,`password`,`is_admin`) values 
(3,'John','Doe','john@gmail.com','25d55ad283aa400af464c76d713c07ad',0),
(4,'Jane','Doe','jane@gmail.com','25d55ad283aa400af464c76d713c07ad',0),
(6,'Admir','Krilašević','admirkrilasevic@gmail.com','25d55ad283aa400af464c76d713c07ad',1),
(7,'Test','Test','krilasevica@gmail.com','25d55ad283aa400af464c76d713c07ad',0),
(8,'Admin','User','admin@email.com','0192023a7bbd73250516f069df18b500',1),
(9,'Basic','User','user@email.com','25d55ad283aa400af464c76d713c07ad',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
