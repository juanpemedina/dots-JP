import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CancelButton from "../components/common/CancelButton";
import ActionButton from "../components/common/ActionButton";
import PageHeader from "../components/common/PageHeader";
import PageTitle from "../components/common/PageTitle";
import Popover from "../components/common/Popover";

import logo from "/logo.jpeg";

type Notification = {
	id: number;
	title: string;
	description: string;
};

export default function Notifications() {
	const [notifications, setNotifications] = useState<Notification[]>([]);
	const [newNotificationVisible, setNewNotificationVisible] = useState(false);
	const [newNotificationTitle, setNewNotificationTitle] = useState<string>("");
	const [newNotificationDescription, setNewNotificationDescription] =
		useState<string>("");

	const deleteNotification = (id: number) => {
		const newNotifications = notifications.filter(
			(notification) => notification.id !== id
		);
		setNotifications(newNotifications);
	};

	const addNotification = () => {
		const newId = notifications.length + 1;
		const newNotification = {
			id: newId,
			title: newNotificationTitle || "Título del anuncio",
			description: newNotificationDescription || "Descripción del anuncio",
		};
		setNotifications([...notifications, newNotification]);
		setNewNotificationVisible(false);
		setNewNotificationTitle("");
		setNewNotificationDescription("");
	};

	const processNotificationDescription = (description: string) => {
		const maxCharactersPerLine = 50;
		const words = description.split(" ");
		let currentLine = "";
		const lines = [];
		words.forEach((word) => {
			if (currentLine.length + word.length + 1 <= maxCharactersPerLine) {
				currentLine += (currentLine ? " " : "") + word;
			} else {
				lines.push(currentLine);
				currentLine = word;
			}
		});
		lines.push(currentLine);
		return lines.join("\n  ");
	};

	return (
		<div className="relative">
			<PageHeader>
				<div className="flex justify-between items-center">
					<PageTitle>Anuncios</PageTitle>
					<div className="ms-3">
					<Popover helpImg={logo}/>
					</div>
				</div>
			</PageHeader>
			{notifications.map((notification) => (
				<div
					key={notification.id}
					className="max-w-[800px] w-full md:max-w-[1255px] md:w-[70%] lg:max-w-[1600px] lg:w-[60%] my-8 bg-[#0B6E4F] p-8 rounded-[26px] shadow-md relative mx-auto"
				>
					<FontAwesomeIcon
						icon={faTimes}
						className="absolute top-2 right-2 cursor-pointer text-white text-6xl"
						onClick={() => deleteNotification(notification.id)}
					/>
					<h2 className="text-2xl md:text-3xl font-bold mb-3 mt-n2 text-white">
						{notification.title}
					</h2>
					<p className="text-xl md:text-2xl text-gray-100 break-all">
						{processNotificationDescription(notification.description)}
					</p>
				</div>
			))}
			{newNotificationVisible && (
				<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-md border-4 border-neutral-400 rounded-[26px] max-w-full md:max-w-[600px] lg:max-w-[800px]">
					<input
						type="text"
						placeholder="Título del anuncio"
						value={newNotificationTitle}
						onChange={(e) => setNewNotificationTitle(e.target.value)}
						className="border rounded p-2 md:p-4 mb-4 w-full border-[#08A045]"
					/>
					<textarea
						placeholder="Descripción del anuncio"
						value={newNotificationDescription}
						onChange={(e) => setNewNotificationDescription(e.target.value)}
						className="border rounded p-2 md:p-4 mb-4 w-full h-32 md:h-40 border-[#08A045]"
					/>
					<div className="flex justify-center md:justify-end gap-4 md:gap-12">
						<ActionButton onClick={addNotification}>Agregar</ActionButton>
						<CancelButton onClick={() => setNewNotificationVisible(false)}>
							Cancelar
						</CancelButton>
					</div>
				</div>
			)}
			<button
				className="text-white text-lg bg-accent-green px-4 py-2 rounded-xl my-4 mx-auto block md:mr-40"
				onClick={() => setNewNotificationVisible(true)}
				style={{ display: "block" }}
			>
				Nuevo anuncio
			</button>
		</div>
	);
}
