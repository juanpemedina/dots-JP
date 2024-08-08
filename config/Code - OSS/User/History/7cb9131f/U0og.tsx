import { NavLink } from "react-router-dom";
import logo from "/logo.png"

/*
Navigation bar
*/

export default function NavBar({ isAdmin }) { // Receive isAdmin prop
	// Determine menu options based on isAdmin status
	const menuOptions = isAdmin ? navigationOptions.admin : navigationOptions.volunteer;

	return (
		<header className="flex justify-between text-center text-nowrap items-center px-2 bg-main-green text-lg text-white">
			<NavLink to={"/"}>
				<img className="w-20 h-20" src={logo} />
			</NavLink>
			<nav>
				<ul className="flex gap-2">
					{menuOptions.map((item) => (
						<li key={item.text}>
							<NavLink
								to={item.to}
								className={({ isActive }) =>
									(isActive ? "bg-dark-green  " : "") +
									"hover:bg-dark-green p-4 rounded-xl"
								}
								end
							>
								{item.text}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

const navigationOptions = {
	admin: [
		{ text: "Anuncios", to: "/anuncios" },
		{ text: "Salida de artículos", to: "/salida" },
		{ text: "Entrada de artículos", to: "/entrada" },
		{ text: "Préstamos activos", to: "/prestamos" },
		{ text: "Movimientos pasados", to: "/movimientos" },
	],
	volunteer: [
		{ text: "Anuncios", to: "/anuncios" },
		{ text: "Salida de artículos", to: "/salida" },
	],
};
