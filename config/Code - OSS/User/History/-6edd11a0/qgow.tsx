import { RouterProvider, createHashRouter } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Retiros from "./pages/Retiros";
import Contacto from "./pages/Contacto";
import RootLayout from "./pages/Root";

const router = createHashRouter([
  /* 
  {
    path: "/login",
    element: <Login />,
  },
*/
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      {
        index: true,
        element: <div></div>,
      },
      {
        path: "inicio/",
        element: <Inicio />,
      },
      {
        path: "retiros/",
        element: <Retiros />,
      },
      {
        path: "contacto/",
        element: <Contacto />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
