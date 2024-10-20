import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import PembimbingDashboard from "./pages/PembimbingDashboard";
import MahasiswaDashboard from "./pages/MahasiswaDashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBaseRoutes from "./utils/RoleBaseRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin-dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin-dashboard"
        element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={["admin"]}>
              <AdminDashboard />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }
      />
      <Route path="/pembimbing-dashboard" element={<PembimbingDashboard />} />
      <Route path="/mahasiswa-dashboard" element={<MahasiswaDashboard />} />
    </Routes>
  );
}

export default App;
