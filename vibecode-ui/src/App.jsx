import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* root now shows the login page */}
        <Route path="/"        element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* add other routes later, e.g. <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
