import { Outlet } from "react-router-dom";
import NavBar from "../components/navigation/NavBar";
import checkAuth from "../utils/apiCheckAuth";
import { useEffect, useState } from "react";
/**
 * General Layout
 */
function RootLayout() {
	const [isAdmin, setIsAdmin] = useState(false); // State to store admin status

	useEffect(() => { 
	  const fetchUserData = async () => {
		try {
		  const { isAdmin } = await checkAuth(); // Destructure isAdmin from checkAuth response
		  setIsAdmin(isAdmin); // Set isAdmin state
		} catch (error) {
		  console.error("Error checking authentication:", error);
		}
	  };
	  
	  fetchUserData();
	}, []);
	
	return (
		<>
			<NavBar isAdmin={isAdmin} />
			
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
