import { Outlet } from "react-router-dom";
import NavBar from "../components/navigation/NavBar";
import checkAuth from "../utils/apiCheckAuth";
/**
 * General Layout
 */
function RootLayout() {
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
