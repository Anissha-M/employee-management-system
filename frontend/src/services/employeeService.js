import axios from "axios";

// Base URL of the Spring Boot backend
const BASE_URL = "http://localhost:8080/api/employees";

// Get all employees
const getAllEmployees = () => {
  return axios.get(BASE_URL);
};

// Get a single employee by id
const getEmployeeById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

// Create a new employee
const createEmployee = (employee) => {
  return axios.post(BASE_URL, employee);
};

// Update an existing employee
const updateEmployee = (id, employee) => {
  return axios.put(`${BASE_URL}/${id}`, employee);
};

// Delete an employee
const deleteEmployee = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

const employeeService = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};

export default employeeService;
