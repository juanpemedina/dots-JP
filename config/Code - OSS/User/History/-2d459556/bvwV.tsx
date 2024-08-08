import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
const routerAdmin = createBrowserRouter([
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

const router = createBrowserRouter([
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
  // State to determine if the user is an admin or not, initially null
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    // Get the current path
    const currentPath = window.location.pathname;

    // If the current path is "/login", skip authentication and set isAdmin to false
    if (currentPath === "/login") {
      setIsAdmin(false);
      return;
    }

    // Function to authenticate the user
    const authenticate = async () => {
      try {
        // Call the checkAuth function to verify authentication
        const { isAdmin } = await checkAuth();
        // Set the isAdmin state based on the authentication response
        setIsAdmin(isAdmin);
      } catch (error) {
        console.error("Authentication error", error);
        // In case of an error, set isAdmin to false to treat the user as a non-admin
        setIsAdmin(false);
      }
    };
    // Call the authentication function
    authenticate();
  }, []);

  // Display a loading message while determining the authentication state
  if (isAdmin === null) {
    return <div>Loading...</div>;
  }

  // Depending on the isAdmin state, select the appropriate router
  return <RouterProvider router={isAdmin ? routerAdmin : router} />;
}

export default App;
