import React, { useState } from 'react';

const EditEmployeeModal = ({ employee, onUpdate, onClose }) => {
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...employee, name, email });
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Edit Employee</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditEmployeeModal;
