import React from "react";
import ReactDOM from "react-dom"; // Import from "react-dom" instead of "react-dom/client"
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
