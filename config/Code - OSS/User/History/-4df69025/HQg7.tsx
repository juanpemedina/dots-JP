import ActiveLoansTable from "../components/activeLoans/ActiveLoansTable";
import PageHeader from "../components/common/PageHeader";
import PageTitle from "../components/common/PageTitle";
import SearchBar from "../components/common/SearchBar";

import Popover from "../components/common/Popover";

import logo from "/logo.jpeg";



/*
A component for the active loans page
*/
export default function ActiveLoans() {
	// Function to filter
	//TODO: change this to call
	const handleFilter = (searchText: string) => {
		console.log("Filter: " + searchText);
	};
	return (
		<>
			<PageHeader>
				<div className="flex justify-between items-center">
				<PageTitle>Préstamos activos</PageTitle>
					<div className="ms-3">
						<Popover helpImg={logo}/>
					</div>
				</div>
				<SearchBar placeholder="Buscar" onSearch={handleFilter} />
			</PageHeader>
			

			<div className="flex flex-col items-center my-4">
				<ActiveLoansTable loans={loans} />
			</div>
		</>
	);
}

//TODO: Change to API call
const loans = [
	{
		id: 1,
		article: "Pañales",
		quantity: 1,
		date: new Date(2024, 1, 1),
		transactionType: "Préstamo",
		authorizingVolunteer: "Lucía",
		status: true,
		patientNumber: 1,
	},
	{
		id: 2,
		article: "Medicamento",
		quantity: 3,
		date: new Date(2024, 1, 5),
		transactionType: "Compra",
		authorizingVolunteer: "Carlos",
		status: false,
		patientNumber: 2,
	},
	{
		id: 3,
		article: "Vendas",
		quantity: 5,
		date: new Date(2024, 1, 10),
		transactionType: "Préstamo",
		authorizingVolunteer: "Ana",
		status: true,
		patientNumber: 3,
	},
	{
		id: 4,
		article: "Jarabe para la tos",
		quantity: 2,
		date: new Date(2024, 1, 15),
		transactionType: "Compra",
		authorizingVolunteer: "Pedro",
		status: false,
		patientNumber: 4,
	},
	{
		id: 5,
		article: "Silla de ruedas",
		quantity: 1,
		date: new Date(2024, 1, 20),
		transactionType: "Préstamo",
		authorizingVolunteer: "Laura",
		status: true,
		patientNumber: 5,
	},
	{
		id: 6,
		article: "Termómetro",
		quantity: 1,
		date: new Date(2024, 1, 25),
		transactionType: "Préstamo",
		authorizingVolunteer: "Juan",
		status: true,
		patientNumber: 6,
	},
	{
		id: 7,
		article: "Gasas estériles",
		quantity: 4,
		date: new Date(2024, 2, 1),
		transactionType: "Compra",
		authorizingVolunteer: "Elena",
		status: false,
		patientNumber: 7,
	},
	{
		id: 8,
		article: "Alcohol",
		quantity: 2,
		date: new Date(2024, 2, 5),
		transactionType: "Compra",
		authorizingVolunteer: "María",
		status: false,
		patientNumber: 8,
	},
	{
		id: 9,
		article: "Muletas",
		quantity: 2,
		date: new Date(2024, 2, 10),
		transactionType: "Préstamo",
		authorizingVolunteer: "Sofía",
		status: true,
		patientNumber: 9,
	},
	{
		id: 10,
		article: "Antiséptico",
		quantity: 3,
		date: new Date(2024, 2, 15),
		transactionType: "Compra",
		authorizingVolunteer: "Miguel",
		status: false,
		patientNumber: 10,
	},
];
