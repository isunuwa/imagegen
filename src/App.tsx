import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PageNotFound from "./pages/errors/NotFound";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Profile from "./pages/users/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
