import { createRoot } from "react-dom/client";
import "./index.css";
import { MyContextProvider } from "./context/MyContext.jsx";
import AppRoute from "./routes/AppRoute.jsx";

createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <AppRoute />
  </MyContextProvider>,
);
