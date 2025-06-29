import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "@radix-ui/themes/styles.css";
import "./styles/globals.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
