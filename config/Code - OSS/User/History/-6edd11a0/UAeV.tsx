import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Retiros from "./pages/Retiros";
import NavBar from "./components/navigation/NavBar"; // Ensure this path is correct

const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/retiros", element: <Retiros /> },
  { path: "/contacto", element: <Contacto /> },
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
