import { useEffect, useState } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import axios from "axios";
import RootLayout from "./pages/Root";
import Transactions from "./pages/Transactions";
import Outgoings from "./pages/Outgoings";
import Incomings from "./pages/Incomings";
import ActiveLoans from "./pages/ActiveLoans";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Home from "./pages/Home";

// Admin routing
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

// General user routing
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

const checkAuth = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/user/", {
      withCredentials: true,
    });
    const isAdmin = response.data.is_administrator;
    return { isAdmin };
  } catch (error) {
    console.error("Not authorized");
    window.location.href = "/#/login";
    throw error;
  }
};

function App() {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const { isAdmin } = await checkAuth();
        setIsAdmin(isAdmin);
      } catch (error) {
        console.error("Authentication error", error);
      }
    };

    authenticate();
  }, []);

  if (isAdmin === null) {
    return <div>Loading...</div>;
  }

  return (
    <RouterProvider router={isAdmin ? routerAdmin : router} />
  );
}

export default App;
