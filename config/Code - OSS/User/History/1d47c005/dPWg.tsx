import PageTitle from "../components/common/PageTitle";
import "react-multi-carousel/lib/styles.css";
import Category from "../components/carousel/Category";
import ActionButton from "../components/common/ActionButton";
import CancelButton from "../components/common/CancelButton";
import PageHeader from "../components/common/PageHeader";
import Popover from "../components/common/Popover";


import logo from "/logo.jpeg";
import { selectedItemsAtom } from "../stateManagement/selectedItems";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import ExitSummary from "../components/exitresume/ExitSummary";

export default function Outgoings() {
	const [openSummary, setOpenSummary] = useState(false);
	const [_, setSelectedItems] = useAtom(selectedItemsAtom);
	useEffect(() => {
		setSelectedItems(new Map());
	}, []);
	return (
		<div>
			<PageHeader>
				<PageTitle>Salida de artículos</PageTitle>
			</PageHeader>
			<div className="items-center lg:mx-60 md:mx-20 sm:mx-20">
				{openSummary ? <ExitSummary openSummary={openSummary} setOpenSummary={setOpenSummary}/> : (
					<>
						<Category itemData={itemData} />
						<div className="flex justify-end my-8 mx-8 gap-5">
							<CancelButton onClick={() => setSelectedItems(new Map())}>Cancelar</CancelButton>
							<ActionButton onClick={() => setOpenSummary(!openSummary)}>
								Continuar
							</ActionButton>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

const itemData = [
	{
		id: 1,
		imageUrl:
			"https://img.freepik.com/free-photo/abstract-seamless-pattern-luxury-black-mosiac-texture-abstract-ceramic-mosaic-adorned-building-abstract-colored-ceramic-stones_1258-71976.jpg?w=1380",
		name: "Pañal Etapa 1",
		category: "Destacados",
	},
	{
		id: 2,
		imageUrl:
			"https://img.freepik.com/free-photo/abstract-seamless-pattern-luxury-black-mosiac-texture-abstract-ceramic-mosaic-adorned-building-abstract-colored-ceramic-stones_1258-71976.jpg?w=1380",
		name: "Pañal Etapa 2",
		category: "Destacados",
	},
	{
		id: 3,
		imageUrl:
			"https://img.freepik.com/free-photo/abstract-seamless-pattern-luxury-black-mosiac-texture-abstract-ceramic-mosaic-adorned-building-abstract-colored-ceramic-stones_1258-71976.jpg?w=1380",
		name: "Cloro",
		category: "Limpieza",
	},
	{
		id: 4,
		imageUrl:
			"https://img.freepik.com/free-photo/abstract-seamless-pattern-luxury-black-mosiac-texture-abstract-ceramic-mosaic-adorned-building-abstract-colored-ceramic-stones_1258-71976.jpg?w=1380",
		name: "Cobija",
		category: "Destacados",
	},
	{
		id: 5,
		imageUrl:
			"https://img.freepik.com/free-photo/abstract-seamless-pattern-luxury-black-mosiac-texture-abstract-ceramic-mosaic-adorned-building-abstract-colored-ceramic-stones_1258-71976.jpg?w=1380",
		name: "Pañal Etapa 5",
		category: "Destacados",
	},
	{
		id: 6,
		imageUrl:
			"https://img.freepik.com/free-photo/abstract-seamless-pattern-luxury-black-mosiac-texture-abstract-ceramic-mosaic-adorned-building-abstract-colored-ceramic-stones_1258-71976.jpg?w=1380",
		name: "Pinol",
		category: "Limpieza",
	},
	{
		id: 7,
		imageUrl:
			"https://img.freepik.com/free-photo/abstract-seamless-pattern-luxury-black-mosiac-texture-abstract-ceramic-mosaic-adorned-building-abstract-colored-ceramic-stones_1258-71976.jpg?w=1380",
		name: "Pañal Etapa 4",
		category: "Destacados",
	},
	{
		id: 8,
		imageUrl:
			"https://img.freepik.com/free-photo/abstract-seamless-pattern-luxury-black-mosiac-texture-abstract-ceramic-mosaic-adorned-building-abstract-colored-ceramic-stones_1258-71976.jpg?w=1380",
		name: "Pañal Etapa 4",
		category: "Destacados",
	},
	{
		id: 9,
		imageUrl:
			"https://img.freepik.com/free-photo/abstract-seamless-pattern-luxury-black-mosiac-texture-abstract-ceramic-mosaic-adorned-building-abstract-colored-ceramic-stones_1258-71976.jpg?w=1380",
		name: "Pañal Etapa 4",
		category: "Destacados",
	},
	{
		id: 10,
		imageUrl:
			"https://img.freepik.com/free-photo/abstract-seamless-pattern-luxury-black-mosiac-texture-abstract-ceramic-mosaic-adorned-building-abstract-colored-ceramic-stones_1258-71976.jpg?w=1380",
		name: "Pañal Etapa 4",
		category: "Destacados",
	},
];
