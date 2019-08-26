CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name TEXT,
    devoured BOOLEAN DEFAULT false
);