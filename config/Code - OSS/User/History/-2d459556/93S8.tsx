import { useEffect, useState } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Transactions from "./pages/Transactions";
import Outgoings from "./pages/Outgoings";
import Incomings from "./pages/Incomings";
import ActiveLoans from "./pages/ActiveLoans";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Home from "./pages/Home";
import checkAuth from "./utils/apiCheckAuth";

/**
 * General routing
 */
const routerAdmin = createHashRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movimientos/",
        element: <Transactions />,
      },
      {
        path: "salida/",
        element: <Outgoings />,
      },
      {
        path: "entrada/",
        element: <Incomings />,
      },
      {
        path: "prestamos/",
        element: <ActiveLoans />,
      },
      {
        path: "anuncios/",
        element: <Notifications />,
      },
    ],
  },
]);

const router = createHashRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "salida/",
        element: <Outgoings />,
      },
      {
        path: "anuncios/",
        element: <Notifications />,
      },
    ],
  },
]);

function App() {
  // Estado para determinar si es administrador, inicialmente null
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
	// Obtiene la ruta actual eliminando el símbolo '#'
    const currentPath = window.location.hash.slice(1);

	// Si la ruta actual es "/login", no realiza la autenticación y establece isAdmin en false
    if (currentPath === "/login") {
      setIsAdmin(false);
      return;
    }
    // Función para autenticar al usuario
    const authenticate = async () => {
      try {
		// Llama a la función checkAuth para verificar la autenticación
        const { isAdmin } = await checkAuth();
		// Establece el estado isAdmin basado en la respuesta de autenticación
        setIsAdmin(isAdmin);
      } catch (error) {
        console.error("Authentication error", error);
		// En caso de error, establece isAdmin en false para tratar al usuario como no administrador
        setIsAdmin(false);
      }
    };

    authenticate();
  }, []);

  if (isAdmin === null) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={isAdmin ? routerAdmin : router} />;
}

export default App;
