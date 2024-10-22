import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import PembimbingDashboard from "./pages/PembimbingDashboard";
import MahasiswaDashboard from "./pages/MahasiswaDashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBaseRoutes from "./utils/RoleBaseRoutes";
import AdminSummary from "./components/dashboard/AdminSummary";
import DepartemenList from "./components/departemen/DepartemenList";
import AddDepartemen from "./components/departemen/AddDepartemen";
import EditDepartemen from "./components/departemen/EditDepartemen";

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
      >
        <Route index element={<AdminSummary />}></Route>
        <Route
          path="/admin-dashboard/departemen"
          element={<DepartemenList />}
        ></Route>
        <Route
          path="/admin-dashboard/add-departemen"
          element={<AddDepartemen />}
        ></Route>
        <Route
          path="/admin-dashboard/departemen/:id"
          element={<EditDepartemen />}
        ></Route>
      </Route>

      <Route path="/pembimbing-dashboard" element={<PembimbingDashboard />} />
      <Route path="/mahasiswa-dashboard" element={<MahasiswaDashboard />} />
    </Routes>
  );
}

export default App;
