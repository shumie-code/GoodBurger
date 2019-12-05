-- Create burgers_db
create burgers_db;
-- Initialze the use of burgers_db in database
use burgers_db;
-- Create burgers tables 
create table burgers (
    id int not null auto_increment,
    burger_name varchar(255) not null,
    devoured boolean DEFAULT,
    primary key (id)
);

