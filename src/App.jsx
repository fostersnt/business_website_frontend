import "./App.css";
import Dashboard from "./screens/dashboard/Dashboard";
import Documents from "./screens/dashboard/Documents";
import { Layout } from "./screens/dashboard/Layout";
import { Home } from './screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import NotFound from "./components/NotFound";
import JobListing from "./screens/JobListing";

function App() {
  return (
    <>
      <BrowserRouter basename="/business_website_frontend">
      {/* <BrowserRouter basename="/"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="documents" element={<Documents />} />
          </Route>
          <Route path="/jobs" element={<JobListing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
