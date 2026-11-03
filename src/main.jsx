import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoute from "./routes/AppRoute.jsx";
import { MyContextProvider } from "./context/MyContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <ToastContainer />
    <AppRoute />
  </MyContextProvider>,
);
