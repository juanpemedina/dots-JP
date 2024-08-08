import React, { useState } from "react";
import logo from "/logo.png";
import loginHNP from "/loginHNP.png";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Usercode:", password);
  
    try {
      const response = await axios.post(
        'http://localhost:8000/api/user/login/',
        { email, password }, // Data to send in the request body
        { withCredentials: true } // Enable sending cookies with the request (for the JWT auth)
      );
      // Gives the token in the response
      const accessToken = response.data.access_token;

      // Store the access token in localStorage
      localStorage.setItem('access_token', accessToken);

      // Handle successful login
      console.log("Login success:", response.data);
      console.log("Is admin:", response.data.is_administrator);


      // Redirect the user to the desired page
      window.location.href = '/#anuncios/';
    } catch (error) {
      // Handle login failure
      console.error("Login error:", error);
    }
    // Reset the form after submission
    setEmail("admin@gmail.com");
    setPassword("juan20032003");
  };

  return ( 
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="bg-green-600 text-white text-2xl font-bold m-auto mb-2 px-10 py-3  rounded-2xl hidden md:block">Administración de donaciones y almacén</h1>
      <div className="grid grid-cols-1 w-full h-screen m-auto md:mt-2 md:grid-cols-2 md:h-[550px] sm:max-w-[900px]">
        <div className="bg-green-600  flex flex-col items-center justify-center py-2 md:rounded-l-3xl">
          <img className=" mx-6 mb-2 rounded-full" src={logo} alt="/" />
          <h2 className="text-2xl text-white font-semibold mb-2">Inicio de Sesión</h2>
          <form onSubmit={submit}>
          <div>
              <input 
                  className="border p-2 rounded-3xl text-center h-12 w-48 mb-1" 
                  type="text" 
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />
            </div>
            <div>
              <input 
                className="border p-2 rounded-3xl text-center h-12 w-48" 
                type="text" 
                placeholder="Código de usuario"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="w-48 h-12 my-3 rounded-3xl text-white text-lg font-semibold bg-green-900 hover:bg-gray-500"
            >
              Ingresar
            </button>
          </form>
        </div>
        <div className="hidden md:block bg-transparent">
          <img className="w-full h-[550px] rounded-r-3xl" src={loginHNP} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Login;
