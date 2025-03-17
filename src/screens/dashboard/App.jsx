import "./App.css";
import Dashboard from "./screens/dashboard/Dashboard";
import { Layout } from "./screens/dashboard/Layout";
import { Home } from "./screens/Home";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Layout />}>
            {/* renders into the outlet in <Dashboard> at "/dashboard" */}
            <Route index element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
