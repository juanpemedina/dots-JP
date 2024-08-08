// Importa los paquetes de React necesarios
import React, { useEffect, useState } from "react";
import axios from "axios";

// Define el componente Home
export const Home: React.FC = () => {
  // Estado para almacenar el mensaje recibido del backend
  const [message, setMessage] = useState('');

  // Efecto para realizar la solicitud GET al backend al cargar el componente
  useEffect(() => {
    // Comprueba si el token de acceso está presente en el almacenamiento local
    if (!localStorage.getItem('access_token')) {
      // Si no hay token de acceso, redirige al usuario a la página de inicio de sesión
      window.location.href = '/#/login';
      console.log("Login error");
    } else {
      // Si hay un token de acceso, realiza la solicitud GET al backend
      (async () => {
        try {
          // Realiza la solicitud GET al endpoint '/api/user/' en el backend
          const response = await axios.get('http://localhost:8000/api/user/', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`, // Incluye el token de acceso en el encabezado de autorización
              'Content-Type': 'application/json'
            },
            withCredentials: true // Permite enviar cookies con la solicitud (si es necesario)
          });

          // Actualiza el estado del mensaje con el mensaje recibido del backend
          setMessage(response.data.message);
        } catch (error) {
          // Maneja cualquier error que ocurra durante la solicitud
          console.error('Error fetching data:', error);
          setMessage('Error fetching data');
        }
      })();
    }
  }, []); // El efecto se ejecutará solo una vez al cargar el componente

  // Renderiza el mensaje en el componente
  return (
    <div className="form-signin mt-5 text-center">
      <h3>Hi {message}</h3>
    </div>
  );
};
