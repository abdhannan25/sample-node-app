import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
    };

    try {
      await axios.post('http://localhost:4000/user/add', newUser);
      console.log('User added successfully');
      // You can show a success message or redirect the user here
    } catch (error) {
      console.error('Error adding user', error);
    }
  };

  return (
    <div style={{marginTop: 100}}> 
      <h2>Spring Boot React app for Docker</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginTop: 100}}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{marginTop: 20}}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" style={{marginTop: 20, backgroundColor: "yellow" }}>Add User</button>
      </form>
    </div>
  );
}

export default UserForm;
