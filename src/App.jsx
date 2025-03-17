import "./App.css";
import Dashboard from "./screens/dashboard/Dashboard";
import Documents from "./screens/dashboard/Documents";
import { Layout } from "./screens/dashboard/Layout";
import { Home } from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Layout />}>
            {/* renders into the outlet in <Dashboard> at "/dashboard" */}
            <Route index element={<Dashboard />} />
            <Route path="documents" element={<Documents />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
