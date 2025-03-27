import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Ruta principal */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
