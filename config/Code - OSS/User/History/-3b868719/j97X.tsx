import{ useState } from 'react';
import { useAtom } from "jotai";
import { selectedItemsAtom } from "../../stateManagement/selectedItems";
import ActionButton from "../common/ActionButton";
import CancelButton from "../common/CancelButton";
import moment from "moment-timezone"
import { postData } from '../../utils/apiCalls';

export default function IncomingsSummaryForm({openSummary, setOpenSummary}: IncomingsResumeFormProps) {
    const [volunteerName, setVolunteerName] = useState("");
    const [donor, setDonor] = useState("");
    const date = moment().tz('America/Mexico_City').format();

    const [selectedItemsMap, setSelectedItemsMap] = useAtom(selectedItemsAtom);

    const handleClick = async () => {
		try {
			// Convertir el mapa en un array de objetos
			const item_set = Array.from(selectedItemsMap.entries()).map(
				([id, selectedItem]) => ({
				item: id,
				quantity: selectedItem.quantity
				})
			);

        let url;
        let requestBody;
        url = 'http://127.0.0.1:8000/incomings/';
        requestBody = {
            "authorizing_volunteer": volunteerName,
            "donor": donor,
            "date": date,
            "incominghaveitem_set": item_set
        };

        // Llama a la función postData con la URL y el cuerpo de la solicitud
        await postData({ url, requestBody });
		} catch (error) {
		  console.error('Error al realizar la solicitud POST:', error);
		}
        setSelectedItemsMap(new Map());
        setOpenSummary(!openSummary);
	  };

    return (
        <>
            <div className="flex justify-center px-4">
                <div className="inline-block rounded-xl border-2 px-8 py-8 border-grey">
                    <p className="text-2xl text-dark-green text-left">Donador:</p>
                    <input
                        type="text"
                        name="donorName"
                        value={donor}
                        onChange={(e) => setDonor(e.target.value)}
                        placeholder="Donador"
                        className="w-full p-2 mt-2 border-2 border-accent-green rounded-xl focus:outline-none focus:border-accent-green"
                    />
                    <p className="text-2xl text-dark-green text-left mt-8">Nombre de voluntario que registra:</p>
                    <input
                        type="text"
                        value={volunteerName}
                        onChange={(e) => setVolunteerName(e.target.value)}
                        placeholder="Nombre de voluntario"
                        className="w-full p-2 mt-2 border-2 border-accent-green rounded-xl focus:outline-none focus:border-accent-green"
                    />
                </div>
            </div>
            <div className="flex justify-center my-8 mx-8 gap-5">
                <CancelButton onClick={() => setOpenSummary(!openSummary)}>Cancelar</CancelButton>
                <ActionButton onClick={handleClick}>Continuar</ActionButton>
            </div>
        </>  
    );
};

interface IncomingsResumeFormProps{
	openSummary: boolean;
	setOpenSummary: (openSummary: boolean) => void;
}