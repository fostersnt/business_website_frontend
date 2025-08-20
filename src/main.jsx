import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ParticleJsBackground from "./components/animations/ParticleJs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    <ParticleJsBackground />
    <App />
    {/* </BrowserRouter> */}
  </StrictMode>
);
