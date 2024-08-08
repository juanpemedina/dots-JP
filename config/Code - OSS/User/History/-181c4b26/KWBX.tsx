import { Outlet } from "react-router-dom";
import NavBar from "../components/navigation/NavBar";

/**
 * General Layout
 */
function RootLayout() {
	return (
		<h1>J</h1>

		<>
			<NavBar />
			<main>
				<Outlet />
			</main>

		</>
	);
}

export default RootLayout;
