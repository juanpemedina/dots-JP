import PageTitle from "../components/common/PageTitle";
import SearchBar from "../components/common/SearchBar";
import Incomings from "../components/transactions/Incomings";
import * as Tabs from "@radix-ui/react-tabs";
import Outgoings from "../components/transactions/Outgoings";
import Loans from "../components/transactions/Loans";
import PageHeader from "../components/common/PageHeader";
import Popover from "../components/common/Popover";

import logo from "/logo.jpeg";

export default function Transactions() {
	// Function to filter
	//TODO: change this to call
	const handleFilter = (searchText: string) => {
		console.log("Filter: " + searchText);
	};

	return (
		<>
			<PageHeader>
				
				<PageTitle>Movimientos pasados</PageTitle>
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
							<Loans />
						</div>
					</Tabs.Content>
				</div>
			</Tabs.Root>
		</>
	);
}
