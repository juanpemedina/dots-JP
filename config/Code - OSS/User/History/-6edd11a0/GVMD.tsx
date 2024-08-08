import { RouterProvider, createHashRouter } from "react-router-dom";

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
        element: <Transactions />,
      },
      {
        path: "retiros/",
        element: <Outgoings />,
      },
      {
        path: "contacto/",
        element: <Incomings />,
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
