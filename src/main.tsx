
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NewPage from "./pages/NewPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/new" element={<NewPage />} /> */}
      </Routes>
  </BrowserRouter>
);
