import React, { useEffect, useState } from "react";
import employeeService from "../services/employeeService";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  department: "",
  designation: "",
  salary: "",
};

function EmployeeForm({ selectedEmployee, onSaved, onCancel }) {
  const [employee, setEmployee] = useState(initialState);
  const [errors, setErrors] = useState({});


  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    } else {
      setEmployee(initialState);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!employee.firstName.trim()) newErrors.firstName = "First name is required";
    if (!employee.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!employee.email.trim()) newErrors.email = "Email is required";
    if (!employee.department.trim()) newErrors.department = "Department is required";
    if (!employee.designation.trim()) newErrors.designation = "Designation is required";
    if (!employee.salary) newErrors.salary = "Salary is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = { ...employee, salary: parseFloat(employee.salary) };

    try {
      if (employee.id) {
  
        await employeeService.updateEmployee(employee.id, payload);
      } else {

        await employeeService.createEmployee(payload);
      }
      setEmployee(initialState);
      onSaved();
    } catch (err) {
      console.error("Error saving employee:", err);
      alert("Something went wrong while saving the employee.");
    }
  };

  const handleCancel = () => {
    setEmployee(initialState);
    setErrors({});
    onCancel();
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>{employee.id ? "Edit Employee" : "Add New Employee"}</h2>

      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
          />
          {errors.department && <span className="error">{errors.department}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={employee.designation}
            onChange={handleChange}
          />
          {errors.designation && <span className="error">{errors.designation}</span>}
        </div>

        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
          />
          {errors.salary && <span className="error">{errors.salary}</span>}
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {employee.id ? "Update" : "Add"} Employee
        </button>
        {employee.id && (
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default EmployeeForm;
