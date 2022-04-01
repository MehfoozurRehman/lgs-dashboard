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
import AllocateRewards from "./screens/AllocateRewards";
import InvoiceBills from "./screens/InvoiceBills";
import Settings from "./screens/Settings";
import PricingDiscounting from "./screens/PricingDiscounting";
import AdsManagement from "./screens/AdsManagement";
import PaymentHistory from "./screens/PaymentHistory";
import Notifications from "./screens/Notifications";
import CallUs from "./screens/CallUs";
import NotificationForm from "./screens/NotificationForm";
import AllocateRewardPopup from "./components/AllocateRewardPopup";
import RecieptPopup from "./components/RecieptPopup";
import Signup2nd from "./screens/Signup2nd";
import OtpEmail from "./screens/OtpEmail";
import SignupLast from "./screens/Signuplast";
import SettingsEditProfile from "./screens/SettingsEditProfile";
import CustomerRequests from "./screens/CustomerRequests";
import ChangePasswordPopup from "./components/ChangePasswordPopup";
import CreatePromoCodePopup from "./components/CreatePromoCodePopup";
import HistoryPromos from "./screens/HistoryPromos";
import Payment from "./screens/Payment";
import CardPopup from "./components/CardPopup";

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
  const [isChangePasswordPopup, setIsChangePasswordPopup] = useState(false);
  const [isCreatePromoCodePopup, setIsCreatePromoCodePopup] = useState(false);
  const [isEditPromoCodePopup, setIsEditPromoCodePopup] = useState(false);
  const [isAddAllocateRewardPopup, setIsAddAllocateRewardPopup] =
    useState(false);
  const [isEditAllocateRewardPopup, setIsEditAllocateRewardPopup] =
    useState(false);
  const [isAddRecieptPopup, setIsAddRecieptPopup] = useState(false);
  const [isEditRecieptPopup, setIsEditRecieptPopup] = useState(false);
  const [isAddCardPopup, setIsAddCardPopup] = useState(false);
  const [isEditCardPopup, setIsEditCardPopup] = useState(false);

  return (
    <>
      {isDeleteConfirmation ? (
        <DeleteConfirmation
          onClose={setIsDeleteConfirmation}
          onSubmit={setIsDeleteConfirmation}
        />
      ) : null}
      {isChangePasswordPopup ? (
        <ChangePasswordPopup
          onClose={setIsChangePasswordPopup}
          onSubmit={setIsChangePasswordPopup}
        />
      ) : null}
      {isCreatePromoCodePopup ? (
        <CreatePromoCodePopup
          onClose={setIsCreatePromoCodePopup}
          onSubmit={setIsCreatePromoCodePopup}
        />
      ) : null}
      {isEditPromoCodePopup ? (
        <CreatePromoCodePopup
          isEdit={true}
          onClose={setIsEditPromoCodePopup}
          onSubmit={setIsEditPromoCodePopup}
        />
      ) : null}
      {isAddCardPopup ? (
        <CardPopup onClose={setIsAddCardPopup} onSubmit={setIsAddCardPopup} />
      ) : null}
      {isEditCardPopup ? (
        <CardPopup
          isEdit={true}
          onClose={setIsEditCardPopup}
          onSubmit={setIsEditCardPopup}
        />
      ) : null}
      {isAddAllocateRewardPopup ? (
        <AllocateRewardPopup
          onClose={setIsAddAllocateRewardPopup}
          onSubmit={setIsAddAllocateRewardPopup}
        />
      ) : null}
      {isEditAllocateRewardPopup ? (
        <AllocateRewardPopup
          isEdit
          onClose={setIsEditAllocateRewardPopup}
          onSubmit={setIsEditAllocateRewardPopup}
        />
      ) : null}
      {isAddRecieptPopup ? (
        <RecieptPopup
          onClose={setIsAddRecieptPopup}
          onSubmit={setIsAddRecieptPopup}
        />
      ) : null}
      {isEditRecieptPopup ? (
        <RecieptPopup
          isEdit
          onClose={setIsEditRecieptPopup}
          onSubmit={setIsEditRecieptPopup}
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
          <Route
            path="allocate_rewards"
            element={
              <AllocateRewards
                onDelete={setIsDeleteConfirmation}
                onAdd={setIsAddAllocateRewardPopup}
                onEdit={setIsEditAllocateRewardPopup}
              />
            }
          />
          <Route
            path="invoice_bills"
            element={<InvoiceBills onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="settings"
            element={
              <Settings
                onDelete={setIsDeleteConfirmation}
                onAdd={setIsAddRecieptPopup}
                onEdit={setIsEditRecieptPopup}
              />
            }
          />
          <Route
            path="settings/edit_profile"
            element={
              <SettingsEditProfile
                onDelete={setIsDeleteConfirmation}
                onAdd={setIsAddRecieptPopup}
                onEdit={setIsEditRecieptPopup}
                onChangePassword={setIsChangePasswordPopup}
              />
            }
          />
          <Route
            path="history_promos"
            element={
              <HistoryPromos
                onEdit={setIsEditPromoCodePopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="customer_requests"
            element={
              <CustomerRequests
                onCreate={setIsCreatePromoCodePopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="pricing_discounting"
            element={<PricingDiscounting onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="ad_management"
            element={<AdsManagement onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="payment"
            element={
              <Payment
                onAdd={setIsAddCardPopup}
                onEdit={setIsEditCardPopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="payment_history"
            element={<PaymentHistory onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="notifications"
            element={<Notifications onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="notifications/add"
            element={<NotificationForm heading="Add" />}
          />
          <Route
            path="notifications/edit"
            element={<NotificationForm heading="Edit" />}
          />
          <Route
            path="call_us"
            element={<CallUs onDelete={setIsDeleteConfirmation} />}
          />
        </Route>
      </Routes>
    </>
  );
}
