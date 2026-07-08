import axios from "axios";


const BASE_URL = "http://localhost:8080/api/employees";


const getAllEmployees = () => {
  return axios.get(BASE_URL);
};


const getEmployeeById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};


const createEmployee = (employee) => {
  return axios.post(BASE_URL, employee);
};


const updateEmployee = (id, employee) => {
  return axios.put(`${BASE_URL}/${id}`, employee);
};

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
