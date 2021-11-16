CREATE database Test01;
CREATE USER 'TestUser01'@'%' IDENTIFIED BY 'AuthTestUser01';
GRANT all on *.* TO 'TestUser01'@'%';
USE Test01;
