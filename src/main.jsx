import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import Layout from "./Layout/Layout.jsx";
import { BrowserRouter } from "react-router-dom";
import ContactProvider from "./context/ContactContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Layout>
      <ContactProvider>
        <App />
      </ContactProvider>
    </Layout>
  </BrowserRouter>
  // </React.StrictMode>
);
