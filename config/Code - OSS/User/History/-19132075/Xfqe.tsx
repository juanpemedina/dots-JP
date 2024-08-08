import PageTitle from "../components/common/PageTitle";
import "react-multi-carousel/lib/styles.css";
import Category from "../components/carousel/Category";
import CancelButton from "../components/common/CancelButton";
import ActionButton from "../components/common/ActionButton";
import PageHeader from "../components/common/PageHeader";

export default function Incomings() {
	return (
		<div>
			<PageHeader>
				<PageTitle>Entrada de artículos</PageTitle>
			</PageHeader>
			<div></div>
			<div className="items-center lg:mx-60 md:mx-20 sm:mx-20">
				<Category itemData={itemData} />
				<Category itemData={personalesItems} />
				<Category itemData={cocinaItems} />
				<Category itemData={mantenimientoItems} />
				<Category itemData={tecnologiaItems} />
				<Category itemData={deporteItems} />
				<Category itemData={librosItems} />
				<div className="flex justify-end my-8 mx-8 gap-5">
					<CancelButton>Cancelar</CancelButton>
					<ActionButton>Continuar</ActionButton>
				</div>
			</div>
		</div>
	);
}

const itemData = [
	{
		id: 1,
		imageUrl: "/logo.jpeg",
		name: "Pañal Etapa 1",
		quantity: 23,
		category: "Destacados",
	},
	{
		id: 2,
		imageUrl: "/logo.jpeg",
		name: "Pañal Etapa 2",
		quantity: 32,
		category: "Destacados",
	},
	{
		id: 3,
		imageUrl: "/logo.jpeg",
		name: "Cloro",
		quantity: 765,
		category: "Limpieza",
	},
	{
		id: 4,
		imageUrl: "/logo.jpeg",
		name: "Cobija",
		quantity: 123,
		category: "Destacados",
	},
	{
		id: 5,
		imageUrl: "/logo.jpeg",
		name: "Pañal Etapa 5",
		quantity: 4,
		category: "Destacados",
	},
	{
		id: 6,
		imageUrl: "/logo.jpeg",
		name: "Pinol",
		quantity: 33,
		category: "Limpieza",
	},
	{
		id: 7,
		imageUrl: "/logo.jpeg",
		name: "Pañal Etapa 4",
		quantity: 33,
		category: "Destacados",
	},
	{
		id: 8,
		imageUrl: "/logo.jpeg",
		name: "Pañal Etapa 4",
		quantity: 33,
		category: "Destacados",
	},
	{
		id: 9,
		imageUrl: "/logo.jpeg",
		name: "Pañal Etapa 4",
		quantity: 33,
		category: "Destacados",
	},
	{
		id: 10,
		imageUrl: "/logo.jpeg",
		name: "Pañal Etapa 4",
		quantity: 33,
		category: "Destacados",
	},
];

const personalesItems = [
	{
		id: 11,
		imageUrl: "/logo.jpeg",
		name: "Cepillo de dientes",
		quantity: 10,
		category: "Artículos personales",
	},
	{
		id: 12,
		imageUrl: "/logo.jpeg",
		name: "Shampoo",
		quantity: 5,
		category: "Artículos personales",
	},
	{
		id: 13,
		imageUrl: "/logo.jpeg",
		name: "Toallas sanitarias",
		quantity: 20,
		category: "Artículos personales",
	},
	{
		id: 14,
		imageUrl: "/logo.jpeg",
		name: "Jabón de baño",
		quantity: 15,
		category: "Artículos personales",
	},
	{
		id: 15,
		imageUrl: "/logo.jpeg",
		name: "Desodorante",
		quantity: 8,
		category: "Artículos personales",
	},
	{
		id: 16,
		imageUrl: "/logo.jpeg",
		name: "Peine",
		quantity: 12,
		category: "Artículos personales",
	},
	{
		id: 17,
		imageUrl: "/logo.jpeg",
		name: "Pasta dental",
		quantity: 10,
		category: "Artículos personales",
	},
	{
		id: 18,
		imageUrl: "/logo.jpeg",
		name: "Acondicionador",
		quantity: 6,
		category: "Artículos personales",
	},
	{
		id: 19,
		imageUrl: "/logo.jpeg",
		name: "Gel de baño",
		quantity: 10,
		category: "Artículos personales",
	},
	{
		id: 20,
		imageUrl: "/logo.jpeg",
		name: "Cortauñas",
		quantity: 10,
		category: "Artículos personales",
	},
];

const cocinaItems = [
	{
		id: 21,
		imageUrl: "/logo.jpeg",
		name: "Olla",
		quantity: 3,
		category: "Artículos de cocina",
	},
	{
		id: 22,
		imageUrl: "/logo.jpeg",
		name: "Batidora",
		quantity: 5,
		category: "Artículos de cocina",
	},
	{
		id: 23,
		imageUrl: "/logo.jpeg",
		name: "Escurridor de platos",
		quantity: 4,
		category: "Artículos de cocina",
	},
	{
		id: 24,
		imageUrl: "/logo.jpeg",
		name: "Tostadora",
		quantity: 7,
		category: "Artículos de cocina",
	},
	{
		id: 25,
		imageUrl: "/logo.jpeg",
		name: "Exprimidor de cítricos",
		quantity: 6,
		category: "Artículos de cocina",
	},
	{
		id: 26,
		imageUrl: "/logo.jpeg",
		name: "Cafetera",
		quantity: 8,
		category: "Artículos de cocina",
	},
	{
		id: 27,
		imageUrl: "/logo.jpeg",
		name: "Tetera",
		quantity: 4,
		category: "Artículos de cocina",
	},
	{
		id: 28,
		imageUrl: "/logo.jpeg",
		name: "Molinillo de café",
		quantity: 6,
		category: "Artículos de cocina",
	},
	{
		id: 29,
		imageUrl: "/logo.jpeg",
		name: "Abrelatas",
		quantity: 3,
		category: "Artículos de cocina",
	},
	{
		id: 30,
		imageUrl: "/logo.jpeg",
		name: "Tijeras de cocina",
		quantity: 7,
		category: "Artículos de cocina",
	},
];

const mantenimientoItems = [
	{
		id: 31,
		imageUrl: "/logo.jpeg",
		name: "Destornillador plano",
		quantity: 5,
		category: "Artículos de mantenimiento",
	},
	{
		id: 32,
		imageUrl: "/logo.jpeg",
		name: "Alicates",
		quantity: 8,
		category: "Artículos de mantenimiento",
	},
	{
		id: 33,
		imageUrl: "/logo.jpeg",
		name: "Llave inglesa",
		quantity: 6,
		category: "Artículos de mantenimiento",
	},
	{
		id: 34,
		imageUrl: "/logo.jpeg",
		name: "Llave de tubo",
		quantity: 4,
		category: "Artículos de mantenimiento",
	},
	{
		id: 35,
		imageUrl: "/logo.jpeg",
		name: "Nivel",
		quantity: 3,
		category: "Artículos de mantenimiento",
	},
	{
		id: 36,
		imageUrl: "/logo.jpeg",
		name: "Cinta métrica",
		quantity: 7,
		category: "Artículos de mantenimiento",
	},
	{
		id: 37,
		imageUrl: "/logo.jpeg",
		name: "Llave Allen",
		quantity: 5,
		category: "Artículos de mantenimiento",
	},
	{
		id: 38,
		imageUrl: "/logo.jpeg",
		name: "Sierra de mano",
		quantity: 4,
		category: "Artículos de mantenimiento",
	},
	{
		id: 39,
		imageUrl: "/logo.jpeg",
		name: "Martillo de goma",
		quantity: 6,
		category: "Artículos de mantenimiento",
	},
	{
		id: 40,
		imageUrl: "/logo.jpeg",
		name: "Cúter",
		quantity: 5,
		category: "Artículos de mantenimiento",
	},
];

const tecnologiaItems = [
	{
		id: 41,
		imageUrl: "/logo.jpeg",
		name: "Smartphone",
		quantity: 20,
		category: "Tecnología",
	},
	{
		id: 42,
		imageUrl: "/logo.jpeg",
		name: "Laptop",
		quantity: 15,
		category: "Tecnología",
	},
	{
		id: 43,
		imageUrl: "/logo.jpeg",
		name: "Auriculares inalámbricos",
		quantity: 10,
		category: "Tecnología",
	},
	{
		id: 44,
		imageUrl: "/logo.jpeg",
		name: "Altavoz Bluetooth",
		quantity: 8,
		category: "Tecnología",
	},
	{
		id: 45,
		imageUrl: "/logo.jpeg",
		name: "Tablet",
		quantity: 12,
		category: "Tecnología",
	},
	{
		id: 46,
		imageUrl: "/logo.jpeg",
		name: "Cámara digital",
		quantity: 6,
		category: "Tecnología",
	},
	{
		id: 47,
		imageUrl: "/logo.jpeg",
		name: "Monitor",
		quantity: 10,
		category: "Tecnología",
	},
	{
		id: 48,
		imageUrl: "/logo.jpeg",
		name: "Impresora",
		quantity: 7,
		category: "Tecnología",
	},
	{
		id: 49,
		imageUrl: "/logo.jpeg",
		name: "Router",
		quantity: 9,
		category: "Tecnología",
	},
	{
		id: 50,
		imageUrl: "/logo.jpeg",
		name: "Cargador portátil",
		quantity: 15,
		category: "Tecnología",
	},
];

const deporteItems = [
	{
		id: 51,
		imageUrl: "/logo.jpeg",
		name: "Pelota de fútbol",
		quantity: 20,
		category: "Deporte",
	},
	{
		id: 52,
		imageUrl: "/logo.jpeg",
		name: "Raquetas de tenis",
		quantity: 10,
		category: "Deporte",
	},
	{
		id: 53,
		imageUrl: "/logo.jpeg",
		name: "Balón de baloncesto",
		quantity: 15,
		category: "Deporte",
	},
	{
		id: 54,
		imageUrl: "/logo.jpeg",
		name: "Bicicleta",
		quantity: 8,
		category: "Deporte",
	},
	{
		id: 55,
		imageUrl: "/logo.jpeg",
		name: "Pesas",
		quantity: 12,
		category: "Deporte",
	},
	{
		id: 56,
		imageUrl: "/logo.jpeg",
		name: "Colchoneta de yoga",
		quantity: 10,
		category: "Deporte",
	},
	{
		id: 57,
		imageUrl: "/logo.jpeg",
		name: "Balón medicinal",
		quantity: 7,
		category: "Deporte",
	},
	{
		id: 58,
		imageUrl: "/logo.jpeg",
		name: "Patines",
		quantity: 9,
		category: "Deporte",
	},
	{
		id: 59,
		imageUrl: "/logo.jpeg",
		name: "Cuerda para saltar",
		quantity: 11,
		category: "Deporte",
	},
	{
		id: 60,
		imageUrl: "/logo.jpeg",
		name: "Red de voleibol",
		quantity: 6,
		category: "Deporte",
	},
];

const librosItems = [
	{
		id: 61,
		imageUrl: "/logo.jpeg",
		name: "Harry Potter y la piedra filosofal",
		quantity: 30,
		category: "Libros",
	},
	{
		id: 62,
		imageUrl: "/logo.jpeg",
		name: "El señor de los anillos: La comunidad del anillo",
		quantity: 25,
		category: "Libros",
	},
	{
		id: 63,
		imageUrl: "/logo.jpeg",
		name: "1984",
		quantity: 20,
		category: "Libros",
	},
	{
		id: 64,
		imageUrl: "/logo.jpeg",
		name: "Cien años de soledad",
		quantity: 35,
		category: "Libros",
	},
	{
		id: 65,
		imageUrl: "/logo.jpeg",
		name: "Matar un ruiseñor",
		quantity: 28,
		category: "Libros",
	},
	{
		id: 66,
		imageUrl: "/logo.jpeg",
		name: "Orgullo y prejuicio",
		quantity: 22,
		category: "Libros",
	},
	{
		id: 67,
		imageUrl: "/logo.jpeg",
		name: "El Hobbit",
		quantity: 18,
		category: "Libros",
	},
	{
		id: 68,
		imageUrl: "/logo.jpeg",
		name: "Los juegos del hambre",
		quantity: 27,
		category: "Libros",
	},
	{
		id: 69,
		imageUrl: "/logo.jpeg",
		name: "Crónica de una muerte anunciada",
		quantity: 20,
		category: "Libros",
	},
	{
		id: 70,
		imageUrl: "/logo.jpeg",
		name: "La sombra del viento",
		quantity: 23,
		category: "Libros",
	},
];

/* const items = itemData.map((item) => (
	<Item 
		name={item.name}
		url={item.imageUrl}
		quantity={item.quantity}
        category={item.category}
	/>
)); */
