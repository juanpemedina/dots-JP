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
 * Generate routes based on the role
 */
const generateRoutes = (isAdmin) => {
  const commonRoutes = [
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: <RootLayout />,
      id: "root",
      children: [
        { index: true, element: <Home /> },
        { path: "salida/", element: <Outgoings /> },
        { path: "anuncios/", element: <Notifications /> },
      ],
    },
  ];

  if (isAdmin) {
    commonRoutes[1].children.push(
      { path: "movimientos/", element: <Transactions /> },
      { path: "entrada/", element: <Incomings /> },
      { path: "prestamos/", element: <ActiveLoans /> }
    );
  }

  return createHashRouter(commonRoutes);
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

  const router = generateRoutes(isAdmin);

  return <RouterProvider router={router} />;
}

export default App;
