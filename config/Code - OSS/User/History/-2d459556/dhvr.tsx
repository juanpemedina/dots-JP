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

// Router configurations
const commonRoutes = [
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
];

const adminRoutes = [
  ...commonRoutes,
  {
    path: "movimientos/",
    element: <Transactions />,
  },
  {
    path: "entrada/",
    element: <Incomings />,
  },
  {
    path: "prestamos/",
    element: <ActiveLoans />,
  },
];

// Router initialization
const routerAdmin = createHashRouter(adminRoutes);
const router = createHashRouter(commonRoutes);

function App() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        if (window.location.hash.slice(1) === "/login") {
          setIsAdmin(false);
          return;
        }
        const { isAdmin } = await checkAuth();
        setIsAdmin(isAdmin);
      } catch (error) {
        console.error("Authentication error", error);
        setIsAdmin(false);
      }
    };

    authenticateUser();
  }, []);

  if (isAdmin === null) {
    // Display a loading spinner while determining the authentication state
    return <div>Loading Spinner Component...</div>;
  }

  return <RouterProvider router={isAdmin ? routerAdmin : router} />;
}

export default App;
