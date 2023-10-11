import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Welcome() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchMessage();
  }, []); // The empty dependency array ensures this effect runs only once, like componentDidMount.
  
  async function fetchMessage() {
    try {
      const response = await axios.get('http://localhost:4000/message');
      setMessage(response.data.message);
      console.log(response);
    } catch (error) {
      console.error('Error fetching message', error);
    }
  }

  return (
    <div style={{ marginTop: 100 }}>
      <h2>MERN App for Azure</h2>
      {message && (
        <div style={{ marginTop: 20 }}>
          <h3>Message from the Server:</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default Welcome;
