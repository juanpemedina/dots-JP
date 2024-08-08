import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/navigation/NavBar";
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
