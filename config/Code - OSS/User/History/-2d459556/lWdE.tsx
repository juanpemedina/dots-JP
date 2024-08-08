import { useEffect, useState } from "react";
import { RouterProvider, createHashRouter, RouteObject } from "react-router-dom";
import RootLayout from "./pages/Root";
import Transactions from "./pages/Transactions";
import Outgoings from "./pages/Outgoings";
import Incomings from "./pages/Incomings";
import ActiveLoans from "./pages/ActiveLoans";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Home from "./pages/Home";
import checkAuth from "./utils/apiCheckAuth";

type RoutesConfig = (isAdmin: boolean) => RouteObject[];

const generateRoutes: RoutesConfig = (isAdmin) => {
  const commonRoutes: RouteObject[] = [
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
    const adminRoutes: RouteObject[] = [
      { path: "movimientos/", element: <Transactions /> },
      { path: "entrada/", element: <Incomings /> },
      { path: "prestamos/", element: <ActiveLoans /> }
    ];
    (commonRoutes[1].children as RouteObject[]).push(...adminRoutes);
  }

  return createHashRouter(commonRoutes);
};

function App() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const authResponse = await checkAuth();
        setIsAdmin(authResponse.isAdmin);
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
