ALTER USER 'root'@'localhost' IDENTIFIED BY '19930412';
CREATE DATABASE testDB;
CREATE TABLE recordTable (address VARCHAR(255), amount VARCHAR(255));
INSERT INTO recordtable (address, amount) VALUES ('address1', '37');
INSERT INTO recordtable (address, amount) VALUES ('address2', '9');
INSERT INTO recordtable (address, amount) VALUES ('address3', '15');
DELETE FROM recordtable WHERE address = 'address8';
SET SQL_SAFE_UPDATES = 0;