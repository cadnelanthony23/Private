import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useFadeUp } from './hooks/useFadeUp'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const AUTH_ROUTES = ['/login', '/register'];

function Layout() {
  const location = useLocation();
  const isAuth = AUTH_ROUTES.includes(location.pathname);

  useFadeUp();

  return (
    <>
      {!isAuth && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
      {!isAuth && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}