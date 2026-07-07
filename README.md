# Employee Management System (Full Stack)

A simple full-stack **CRUD** web application to manage employee records using **Spring Boot**, **React JS**, and **MySQL**.

This project was developed to practice full-stack web development by building a REST API with Spring Boot, connecting it to a MySQL database, and creating a responsive React frontend for employee management.

---

## 🚀 Tech Stack

### Backend
- Java 17
- Spring Boot 3
- Spring Data JPA (Hibernate)
- MySQL
- Maven

### Frontend
- React JS
- Axios
- CSS

### Tools
- IntelliJ IDEA / Eclipse
- VS Code
- MySQL Workbench
- Postman
- Git & GitHub

---

## ✨ Features

- Add new employees
- View all employee records
- Update employee details
- Delete employees
- Form validation
- RESTful CRUD APIs
- Responsive user interface

---

## 📁 Project Structure

```text
employee-management-system/
│
├── backend/
│   ├── src/main/java/com/ems/employeemanagement/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── model/
│   │   ├── exception/
│   │   └── EmployeeManagementApplication.java
│   │
│   └── src/main/resources/
│       └── application.properties
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│
├── database/
│   └── schema.sql
│
└── README.md
```

---

## ⚙️ Prerequisites

Make sure the following software is installed:

- Java 17 or above
- Node.js and npm
- MySQL Server
- Maven
- Git

---

## 🛠️ Setup & Run

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
```

---

### 2. Configure MySQL

Create a database:

```sql
CREATE DATABASE employee_db;
```

Update the database configuration in:

```
backend/src/main/resources/application.properties
```

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.hibernate.ddl-auto=update
```

---

### 3. Run the Backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

### 4. Run the Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔗 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get employee by ID |
| POST | `/api/employees` | Create employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |

---

## 📝 Sample JSON

```json
{
  "firstName": "Rahul",
  "lastName": "Sharma",
  "email": "rahul.sharma@example.com",
  "department": "Engineering",
  "designation": "Software Engineer",
  "salary": 55000
}
```

---

## 📚 Learning Outcomes

Through this project, I learned:

- Building REST APIs using Spring Boot
- Implementing CRUD operations with Spring Data JPA
- Connecting Spring Boot with MySQL
- Using Axios to communicate with REST APIs
- Managing state and forms in React
- Handling frontend and backend validation
- Configuring CORS between frontend and backend
- Organizing a full-stack project using layered architecture

---

## 🤝 Future Improvements

- Search employees
- Pagination
- Sorting
- Authentication & Login
- JWT Security
- Role-based access
- Deploy on Render/Vercel

---



## 🙋‍♂️ Author

Built by Anissha as a learning project.


---

