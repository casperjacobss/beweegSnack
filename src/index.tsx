import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
	<AuthContextProvider className="body">
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AuthContextProvider>
);
