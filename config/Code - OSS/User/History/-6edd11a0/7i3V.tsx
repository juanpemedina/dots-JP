import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";

const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/re", element: <Inicio /> },
  { path: "/contacto", element: <Contacto /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
