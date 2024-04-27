import React, { useState, useRef } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const emailRef = useRef(null);
  const [validationMessage, setValidationMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 3) {
      setValidationMessage('Name must be at least 3 characters long');
    } else {
      setValidationMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <div style={{ color: 'red' }}>{validationMessage}</div>
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          ref={emailRef}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
