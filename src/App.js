import Login from "./pages/Login";
import User from "./pages/User";
import History from "./pages/History";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
