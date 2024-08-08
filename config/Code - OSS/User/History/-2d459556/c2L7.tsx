import { RouterProvider, createHashRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Transactions from "./pages/Transactions";
import Outgoings from "./pages/Outgoings";
import Incomings from "./pages/Incomings";
import ActiveLoans from "./pages/ActiveLoans";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Home from "./pages/Home";

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
				path: "salida/",
				element: <Outgoings />,
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

	return (
		<RouterProvider router={isAdmin ? routerAdmin : router} />
	  );
	
  

	
}

export default App;