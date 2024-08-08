import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/navigation/NavBar";
import checkAuth from "../utils/apiCheckAuth";
/**
 * General Layout
 */
function RootLayout() {
	useEffect(() => { checkAuth(); }, []);

	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
