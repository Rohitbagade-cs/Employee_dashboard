import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeCard from './components/EmployeeCard';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
    );
  };

  return (
    <div className="App">
      <h1>Employee Dashboard</h1>
      <div className="cards-container">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} onUpdate={updateEmployee} />
        ))}
      </div>
    </div>
  );
};

export default App;
