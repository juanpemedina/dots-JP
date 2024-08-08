import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Retiros from "./pages/Retiros";

const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/retiros", element: <Retiros /> },
  { path: "/contacto", element: <Contacto /> },
]);

function App() {
  return(
  <NavBar />
  <RouterProvider router={router} />);
}

export default App;
