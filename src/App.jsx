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
import OtpEmail from "./screens/OtpEmail";
import NewsEvents from "./screens/NewsEvents";
import LatestNews from "./screens/LatestNews";
import ContactUs from "./screens/ContactUs";
import AdmissionDates from "./screens/AdmissionDates";
import AdmissionTestRequirements from "./screens/AdmissionTestRequirements";
import RegistrationsAdmissions from "./screens/RegistrationsAdmissions";
import Complaints from "./screens/Complaints";
import Careers from "./screens/Careers";
import Appointments from "./screens/Appointments";
import LearningDevelopmentPrograms from "./screens/LearningDevelopmentPrograms";
import UniversityPlacement from "./screens/UniversityPlacement";
import AlumniRegistration from "./screens/AlumniRegistration";
import EventsGallery from "./screens/EventsGallery";
import MediaPublications from "./screens/MediaPublications";

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
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/otp_email" element={<OtpEmail />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardPanel />} />
          <Route path="news_events" element={<NewsEvents />} />
          <Route path="latest_news" element={<LatestNews />} />
          <Route path="admissions/dates" element={<AdmissionDates />} />
          <Route
            path="admissions/listing"
            element={<RegistrationsAdmissions />}
          />
          <Route
            path="admissions/requirements"
            element={<AdmissionTestRequirements />}
          />
          <Route path="complaints" element={<Complaints />} />
          <Route path="careers" element={<Careers />} />
          <Route path="counselling/appointments" element={<Appointments />} />
          <Route
            path="counselling/programs"
            element={<LearningDevelopmentPrograms />}
          />
          <Route
            path="counselling/placement"
            element={<UniversityPlacement />}
          />
          <Route
            path="alumni/alumni_registration"
            element={<AlumniRegistration />}
          />
          <Route path="alumni/events_gallery" element={<EventsGallery />} />
          <Route
            path="campus_life/publications"
            element={<MediaPublications />}
          />
          <Route path="contact_us" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}
