// App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./Layout/Layout";
import Portfolio from "./Pages/Portfolio/Portfolio";
import LandingPage from "./Pages/Home/LandingPage";
import CaseStudy from "./Pages/CaseStudy/CaseStudy";
import HireTalentPage from "./Pages/HireTalentPage/HireTalentPage";
import Services from "./Pages/Services/Services";
import BookAppointmentForm from "./GlobalComponents/BookAppointmentForm";
import ThankYouPage from "./GlobalComponents/ThankyouPage";
import ComingSoon from "./GlobalComponents/ComingSoon";
import ProfilePage from "./Pages/Profile/Profile";
import EditProfile from "./Pages/Profile/EditProfile";
import Gigs from "./Pages/Gigs/Gigs";
import Login from "./Pages/AuthPages/Login";
import ForgotPassword from "./Pages/AuthPages/ForgotPassword";
import UserName from "./Pages/UserName/UserName";
import Hosting from "./Pages/Hosting/Hosting";
import CheckOut from "./Pages/Portfolio/CheckOut";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import ScrollToTop from "./GlobalComponents/ScrollToTop";
import IndianTalent from "./Pages/AuthPages/IndianTalent";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Landing pages with layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hire-talent" element={<HireTalentPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/username" element={<UserName />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/book-appointment" element={<BookAppointmentForm />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/indianTalent" element={<IndianTalent />} />

          {/* Blogs */}
          <Route path="/blogs" element={<Blogs />} />
          {/* 🔁 dynamic slug */}
          <Route path="/blogs/:slug" element={<BlogDetails />} />
        </Route>

        {/* Auth pages without layout */}
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
