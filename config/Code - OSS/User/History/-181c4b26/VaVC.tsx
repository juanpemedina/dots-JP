import { Outlet } from "react-router-dom";
import NavBar from "../components/navigation/NavBar";

/**
 * General Layout
 */
function RootLayout() {
	return (
		<>
			<NavBar />
			<main>
			<h1>Hola,</h1>
				<Outlet />
			</main>

		</>
	);
}

export default RootLayout;
