import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./01-了解JSX.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <App />
  // </StrictMode>, 
);
