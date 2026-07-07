# Employee Management System (Full Stack)

A simple full-stack **CRUD** web application to manage employee records, built with **Spring Boot**, **React JS**, and **MySQL**.

This project was built as a learning project to practice full-stack development — REST APIs with Spring Boot on the backend, a React single-page app on the frontend, and MySQL for data storage.

---

## 🚀 Tech Stack

**Backend**
- Java 17
- Spring Boot 3
- Spring Data JPA (Hibernate)
- MySQL
- Maven

**Frontend**
- React JS
- Axios (for API calls)
- Plain CSS

---

## ✨ Features

- Add a new employee
- View all employees in a table
- Edit / update employee details
- Delete an employee
- Form validation (frontend and backend)
- REST API following standard CRUD conventions

---

## 📁 Project Structure

```
employee-management-system/
├── backend/                # Spring Boot REST API
│   ├── src/main/java/com/ems/employeemanagement/
│   │   ├── controller/     # REST controllers
│   │   ├── service/        # Business logic
│   │   ├── repository/     # Spring Data JPA repositories
│   │   ├── model/          # Entity classes
│   │   └── exception/      # Custom exceptions & global handler
│   └── src/main/resources/application.properties
│
├── frontend/                # React app
│   └── src/
│       ├── components/     # EmployeeForm.js, EmployeeList.js
│       ├── services/       # employeeService.js (Axios calls)
│       └── App.js
│
├── database/
│   └── schema.sql          # Optional manual DB setup script
│
└── README.md
```

---

## 🛠️ How to Run this Project

### Prerequisites
- Java 17+
- Node.js and npm
- MySQL installed and running
- Maven (or use the included `mvnw` wrapper)

### 1. Setup the database
MySQL will create the database automatically, but make sure MySQL is running.
Update the username/password in `backend/src/main/resources/application.properties` to match your local MySQL credentials:

```properties
spring.datasource.username=root
spring.datasource.password=root
```

(Optional) If you'd rather set it up manually, run `database/schema.sql` in MySQL Workbench or the MySQL CLI.

### 2. Run the backend (Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

The backend will start at **http://localhost:8080**

### 3. Run the frontend (React)

```bash
cd frontend
npm install
npm start
```

The frontend will start at **http://localhost:3000**

---

## 🔗 API Endpoints

| Method | Endpoint               | Description              |
|--------|------------------------|---------------------------|
| GET    | /api/employees         | Get all employees         |
| GET    | /api/employees/{id}    | Get employee by ID        |
| POST   | /api/employees         | Create a new employee     |
| PUT    | /api/employees/{id}    | Update an employee        |
| DELETE | /api/employees/{id}    | Delete an employee        |

Sample request body for POST / PUT:
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

## 📚 What I Learned

- Building a REST API with Spring Boot (Controller → Service → Repository layers)
- Connecting Spring Boot to MySQL using Spring Data JPA
- Consuming REST APIs from React using Axios
- Handling forms, validation, and state in React
- Basic CORS configuration between frontend and backend

---

## 🙋‍♂️ Author

Built by Anissha as a personal/learning project.
Feel free to fork this repo and improve it!

---

