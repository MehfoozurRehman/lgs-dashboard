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
import AcademicCalendar from "./screens/AcademicCalendar";
import LatestNewsPopup from "./components/LatestNewsPopup";
import NewsEventsPopup from "./components/NewsEventsPopup";
import Gallery from "./screens/Gallery";
import EventsGalleryPopup from "./components/EventsGalleryPopup";
import MediaPublicationPopup from "./components/MediaPublicationPopup";
import ParentsHandBook from "./screens/ParentsHandBook";
import Messages from "./screens/Messages";
import MessagesPopup from "./components/MessagesPopup";
import CampusPopup from "./components/CampusPopup";
import FacultyProfiles from "./screens/FacultyProfiles";
import FacultyProfilesPopup from "./components/FacultyProfilesPopup";
import NoticeBoard from "./screens/NoticeBoard";
import NoticeBoardPopup from "./components/NoticeBoardPopup";

function Dashboard({ setIsCampusPopup }) {
  return (
    <div className="container">
      <Sidebar setIsCampusPopup={setIsCampusPopup} />
      <Outlet />
    </div>
  );
}

export default function App() {
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);
  const [isAddLatestNewsPopup, setIsAddLatestNewsPopup] = useState(false);
  const [isEditLatestNewsPopup, setIsEditLatestNewsPopup] = useState(false);
  const [isAddNewsEventsPopup, setIsAddNewsEventsPopup] = useState(false);
  const [isEditNewsEventsPopup, setIsEditNewsEventsPopup] = useState(false);
  const [isAddEventsGalleryPopup, setIsAddEventsGalleryPopup] = useState(false);
  const [isEditEventsGalleryPopup, setIsEditEventsGalleryPopup] =
    useState(false);
  const [isAddMediaPublicationPopup, setIsAddMediaPublicationPopup] =
    useState(false);
  const [isEditMediaPublicationPopup, setIsEditMediaPublicationPopup] =
    useState(false);
  const [isAddMessagePopup, setIsAddMessagePopup] = useState(false);
  const [isEditMessagePopup, setIsEditMessagePopup] = useState(false);
  const [isAddFacultyProfilesPopup, setIsAddFacultyProfilesPopup] =
    useState(false);
  const [isEditFacultyProfilesPopup, setIsEditFacultyProfilesPopup] =
    useState(false);
  const [isAddNoticeBoardPopup, setIsAddNoticeBoardPopup] = useState(false);
  const [isEditNoticeBoardPopup, setIsEditNoticeBoardPopup] = useState(false);
  const [isCampusPopup, setIsCampusPopup] = useState(false);

  return (
    <>
      {isDeleteConfirmation ? (
        <DeleteConfirmation
          onClose={setIsDeleteConfirmation}
          onSubmit={setIsDeleteConfirmation}
        />
      ) : null}
      {isAddLatestNewsPopup ? (
        <LatestNewsPopup
          onClose={setIsAddLatestNewsPopup}
          onSubmit={setIsAddLatestNewsPopup}
        />
      ) : null}
      {isEditLatestNewsPopup ? (
        <LatestNewsPopup
          isEdit={true}
          onClose={setIsEditLatestNewsPopup}
          onSubmit={setIsEditLatestNewsPopup}
        />
      ) : null}
      {isAddNewsEventsPopup ? (
        <NewsEventsPopup
          onClose={setIsAddNewsEventsPopup}
          onSubmit={setIsAddNewsEventsPopup}
        />
      ) : null}
      {isEditEventsGalleryPopup ? (
        <EventsGalleryPopup
          isEdit={true}
          onClose={setIsEditEventsGalleryPopup}
          onSubmit={setIsEditEventsGalleryPopup}
        />
      ) : null}
      {isAddEventsGalleryPopup ? (
        <EventsGalleryPopup
          onClose={setIsAddEventsGalleryPopup}
          onSubmit={setIsAddEventsGalleryPopup}
        />
      ) : null}
      {isEditNewsEventsPopup ? (
        <NewsEventsPopup
          isEdit={true}
          onClose={setIsEditNewsEventsPopup}
          onSubmit={setIsEditNewsEventsPopup}
        />
      ) : null}
      {isAddMediaPublicationPopup ? (
        <MediaPublicationPopup
          onClose={setIsAddMediaPublicationPopup}
          onSubmit={setIsAddMediaPublicationPopup}
        />
      ) : null}
      {isEditMediaPublicationPopup ? (
        <MediaPublicationPopup
          isEdit={true}
          onClose={setIsEditMediaPublicationPopup}
          onSubmit={setIsEditMediaPublicationPopup}
        />
      ) : null}
      {isAddMessagePopup ? (
        <MessagesPopup
          onClose={setIsAddMessagePopup}
          onSubmit={setIsAddMessagePopup}
        />
      ) : null}
      {isEditMessagePopup ? (
        <MessagesPopup
          isEdit={true}
          onClose={setIsEditMessagePopup}
          onSubmit={setIsEditMessagePopup}
        />
      ) : null}
      {isAddFacultyProfilesPopup ? (
        <FacultyProfilesPopup
          onClose={setIsAddFacultyProfilesPopup}
          onSubmit={setIsAddFacultyProfilesPopup}
        />
      ) : null}
      {isEditFacultyProfilesPopup ? (
        <FacultyProfilesPopup
          isEdit={true}
          onClose={setIsEditFacultyProfilesPopup}
          onSubmit={setIsEditFacultyProfilesPopup}
        />
      ) : null}
      {isAddNoticeBoardPopup ? (
        <NoticeBoardPopup
          onClose={setIsAddNoticeBoardPopup}
          onSubmit={setIsAddNoticeBoardPopup}
        />
      ) : null}
      {isEditNoticeBoardPopup ? (
        <NoticeBoardPopup
          isEdit={true}
          onClose={setIsEditNoticeBoardPopup}
          onSubmit={setIsEditNoticeBoardPopup}
        />
      ) : null}
      {isCampusPopup ? (
        <CampusPopup onClose={setIsCampusPopup} onSubmit={setIsCampusPopup} />
      ) : null}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/otp_email" element={<OtpEmail />} />

        <Route
          path="/dashboard"
          element={<Dashboard setIsCampusPopup={setIsCampusPopup} />}
        >
          <Route path="" element={<DashboardPanel />} />
          <Route
            path="academic_calendar"
            element={<AcademicCalendar onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="news_events"
            element={
              <NewsEvents
                onAdd={setIsAddNewsEventsPopup}
                onEdit={setIsEditNewsEventsPopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="latest_news"
            element={
              <LatestNews
                onAdd={setIsAddLatestNewsPopup}
                onEdit={setIsEditLatestNewsPopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="admissions/dates"
            element={<AdmissionDates onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="admissions/listing"
            element={
              <RegistrationsAdmissions onDelete={setIsDeleteConfirmation} />
            }
          />
          <Route
            path="admissions/requirements"
            element={
              <AdmissionTestRequirements onDelete={setIsDeleteConfirmation} />
            }
          />
          <Route
            path="complaints"
            element={<Complaints onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="careers"
            element={<Careers onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="counselling/appointments"
            element={<Appointments onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="counselling/programs"
            element={
              <LearningDevelopmentPrograms onDelete={setIsDeleteConfirmation} />
            }
          />
          <Route
            path="counselling/placement"
            element={<UniversityPlacement onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="alumni/alumni_registration"
            element={<AlumniRegistration onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="alumni/events_gallery"
            element={
              <EventsGallery
                onAdd={setIsAddEventsGalleryPopup}
                onEdit={setIsEditEventsGalleryPopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="alumni/events_gallery/details"
            element={<Gallery heading="Events Gallery" />}
          />
          <Route
            path="campus_life/publications"
            element={
              <MediaPublications
                onAdd={setIsAddMediaPublicationPopup}
                onEdit={setIsEditMediaPublicationPopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="our_campus/messages"
            element={
              <Messages
                onAdd={setIsAddMessagePopup}
                onEdit={setIsEditMessagePopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="our_campus/gallery"
            element={<Gallery heading="Gallery" backURL={true} />}
          />
          <Route
            path="our_campus/faculty_profiles"
            element={
              <FacultyProfiles
                onAdd={setIsAddFacultyProfilesPopup}
                onEdit={setIsEditFacultyProfilesPopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="our_campus/notice_board"
            element={
              <NoticeBoard
                onAdd={setIsAddNoticeBoardPopup}
                onEdit={setIsEditNoticeBoardPopup}
                onDelete={setIsDeleteConfirmation}
              />
            }
          />
          <Route
            path="campus_life/publications/details"
            element={<Gallery heading="Media & Publications Gallery" />}
          />
          <Route
            path="contact_us"
            element={<ContactUs onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="parent_hand_book"
            element={<ParentsHandBook onDelete={setIsDeleteConfirmation} />}
          />
        </Route>
      </Routes>
    </>
  );
}
