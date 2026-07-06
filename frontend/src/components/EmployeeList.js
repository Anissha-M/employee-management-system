import React from "react";

function EmployeeList({ employees, onEdit, onDelete }) {
  if (employees.length === 0) {
    return <p className="no-data">No employees found. Add one using the form above.</p>;
  }

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
            <td>{emp.designation}</td>
            <td>₹{emp.salary}</td>
            <td>
              <button className="btn btn-edit" onClick={() => onEdit(emp)}>
                Edit
              </button>
              <button className="btn btn-delete" onClick={() => onDelete(emp.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
