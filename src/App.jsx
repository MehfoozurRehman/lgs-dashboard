import React, { useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import "./App.scss";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import ChangePassword from "./screens/ChangePassword";
import ForgotPassword from "./screens/ForgotPassword";
import Sidebar from "./components/Sidebar";
import DashboardPanel from "./screens/DashboardPanel";
import DeleteConfirmation from "./components/DeleteConfirmation";
import Signup2nd from "./screens/Signup2nd";
import OtpEmail from "./screens/OtpEmail";
import SignupLast from "./screens/Signuplast";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default function App() {
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);

  return (
    <>
      {isDeleteConfirmation ? (
        <DeleteConfirmation
          onClose={setIsDeleteConfirmation}
          onSubmit={setIsDeleteConfirmation}
        />
      ) : null}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route path="/sign_up_next" element={<Signup2nd />} />
        <Route path="/sign_up_last" element={<SignupLast />} />
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/otp_email" element={<OtpEmail />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardPanel />} />
        </Route>
      </Routes>
    </>
  );
}
