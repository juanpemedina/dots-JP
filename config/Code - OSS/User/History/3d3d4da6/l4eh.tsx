import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import axios from "axios";
import "./index.css";
import { Provider } from "jotai";
import { Toaster } from "react-hot-toast";

//TODO: change to production API
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Toaster />
		<Provider>
			<App />
		</Provider>
	</React.StrictMode>
);
