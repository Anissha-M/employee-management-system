CREATE DATABASE IF NOT EXISTS employee_management_db;

USE employee_management_db;

CREATE TABLE IF NOT EXISTS employees (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    department VARCHAR(100) NOT NULL,
    designation VARCHAR(100) NOT NULL,
    salary DOUBLE NOT NULL
);


INSERT INTO employees (first_name, last_name, email, department, designation, salary)
VALUES
('Rahul', 'Sharma', 'rahul.sharma@example.com', 'Engineering', 'Software Engineer', 55000),
('Priya', 'Verma', 'priya.verma@example.com', 'Human Resources', 'HR Manager', 60000),
('Aman', 'Gupta', 'aman.gupta@example.com', 'Sales', 'Sales Executive', 40000);
