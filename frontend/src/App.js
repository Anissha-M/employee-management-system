import React, { useEffect, useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import employeeService from "./services/employeeService";

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    setLoading(true);
    employeeService
      .getAllEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error fetching employees:", err))
      .finally(() => setLoading(false));
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      employeeService
        .deleteEmployee(id)
        .then(() => fetchEmployees())
        .catch((err) => console.error("Error deleting employee:", err));
    }
  };

  const handleSaved = () => {
    setSelectedEmployee(null);
    fetchEmployees();
  };

  const handleCancel = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Employee Management System</h1>
        <p>Spring Boot + React + MySQL | CRUD Application</p>
      </header>

      <main className="app-main">
        <EmployeeForm
          selectedEmployee={selectedEmployee}
          onSaved={handleSaved}
          onCancel={handleCancel}
        />

        <div className="employee-list-section">
          <h2>Employee List</h2>
          {loading ? (
            <p>Loading employees...</p>
          ) : (
            <EmployeeList
              employees={employees}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Employee Management System</p>
      </footer>
    </div>
  );
}

export default App;
