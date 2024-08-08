// Import the necessary packages from React
import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the Home component
export const Home: React.FC = () => {
  // State to store the message received from the backend
  const [message, setMessage] = useState('');

  // Effect to send a GET request to the backend when the component mounts
  useEffect(() => {
    // Check if the access token is present in local storage
    if (!localStorage.getItem('access_token')) {
      // If access token is not present, redirect user to login page
      window.location.href = '/login';
    } else {
      // If access token is present, send a GET request to the backend
      (async () => {
        try {
          // Send a GET request to the '/api/user/' endpoint in the backend
          const response = await axios.get('http://localhost:8000/api/user/', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`, // Include access token in the authorization header
              'Content-Type': 'application/json'
            },
            withCredentials: true // Allow sending cookies with the request if needed
          });

          // Update the message state with the message received from the backend
          setMessage(response.data.message || "Welcome to our app!"); // If no message is received, display a default message
        } catch (error) {
          // Handle any errors that occur during the request
          console.error('Error fetching data:', error);
          setMessage('Error fetching data');
        }
      })();
    }
  }, []); // The effect will run only once when the component mounts

  // Render the message in the component
  return (
    <div className="form-signin mt-5 text-center">
      <h3>Hi {message}</h3>
    </div>
  );
};
