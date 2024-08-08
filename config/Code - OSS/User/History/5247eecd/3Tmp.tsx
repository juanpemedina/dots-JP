import PageTitle from "../components/common/PageTitle";
import SearchBar from "../components/common/SearchBar";
import Incomings from "../components/transactions/Incomings";
import * as Tabs from "@radix-ui/react-tabs";
import Outgoings from "../components/transactions/Outgoings";
import Loans from "../components/transactions/Loans";
import PageHeader from "../components/common/PageHeader";
import Popover from "../components/common/Popover";

import HelpImg_Movements from "/HelpImg_Movements.jpg";
import { useAtom } from "jotai";
import { searchAtom } from "../stateManagement/search";
import { useEffect } from "react";

export default function Transactions() {
	const [_search, setSearch] = useAtom(searchAtom);
	// Clear the search
	useEffect(() => {
		setSearch("");
	}, []);
	// Function to filter
	const handleFilter = (searchText: string) => {
		setSearch(searchText);
	};

	return (
		<>
			<PageHeader>
				<div className="flex justify-between items-center">
					<PageTitle>Movimientos pasados</PageTitle>
					<div className="ms-3">
						<Popover helpImg={HelpImg_Movements} />
					</div>
				</div>
				<SearchBar placeholder="Buscar" onSearch={handleFilter} />
			</PageHeader>
			<Tabs.Root defaultValue="tab1">
				<div className="m-8">
					<Tabs.List className="flex gap-4" aria-label="Seleccionar movimiento">
						<Tabs.Trigger
							className="border-2 border-accent-green rounded-md p-2 data-[state=active]:text-white data-[state=active]:bg-accent-green"
							value="tab1"
						>
							Salidas
						</Tabs.Trigger>
						<Tabs.Trigger
							className="border-2 border-accent-green rounded-md p-2 data-[state=active]:text-white data-[state=active]:bg-accent-green"
							value="tab2"
						>
							Entradas
						</Tabs.Trigger>
						<Tabs.Trigger
							className="border-2 border-accent-green rounded-md p-2 data-[state=active]:text-white data-[state=active]:bg-accent-green"
							value="tab3"
						>
							Préstamos
						</Tabs.Trigger>
					</Tabs.List>
				</div>
				<div className="flex flex-col items-center">
					<Tabs.Content value="tab1">
						<div className="flex flex-col items-end">
							<Outgoings />
						</div>
					</Tabs.Content>
					<Tabs.Content value="tab2">
						<div className="flex flex-col items-end">
							<Incomings />
						</div>
					</Tabs.Content>
					<Tabs.Content value="tab3">
						<div className="flex flex-col items-end">
							<Loans id="loans-id" />
						</div>
					</Tabs.Content>
				</div>
			</Tabs.Root>
		</>
	);
}
