import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./config/i18n";

// 初始化主题
const initTheme = () => {
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
};
initTheme();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);