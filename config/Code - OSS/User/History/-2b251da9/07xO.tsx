import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; // Import useHistory from React Router

export const Home: React.FC = () => {
  const [message, setMessage] = useState('');
  const history = useHistory(); // Get the history object from React Router

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      // If access token is not present, redirect user to login page
      history.push('/login'); // Redirect to the login page
    } else {
      (async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/user/', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
              'Content-Type': 'application/json'
            },
            withCredentials: true
          });

          setMessage(response.data.message || "Welcome to our app!");
        } catch (error) {
          console.error('Error fetching data:', error);
          setMessage('Error fetching data');
        }
      })();
    }
  }, [history]); // Include history object in dependency array

  return (
    <div className="form-signin mt-5 text-center">
      <h3>Hi {message}</h3>
    </div>
  );
};
