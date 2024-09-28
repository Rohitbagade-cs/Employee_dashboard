import React, { useState } from 'react';
import EditEmployeeModal from './EditEmployeeModal';

const EmployeeCard = ({ employee, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedEmployee) => {
    onUpdate(updatedEmployee);
    setIsEditing(false);
  };

  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>{employee.email}</p>
      <button onClick={handleEdit}>Edit</button>
      {isEditing && (
        <EditEmployeeModal employee={employee} onUpdate={handleUpdate} onClose={() => setIsEditing(false)} />
      )}
    </div>
  );
};

export default EmployeeCard;
