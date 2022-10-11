import "./App.css";

import React, { Component } from "react";
import Home from "./components/Home/Home/Home";
import Header from "./components/Share/Header/Header";
import Footer from "./components/Share/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ.js";
import Contact from "./components/Contact/Contact";
import Login from "./components/Security/Login/Login";
import Register from "./components/Security/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./components/Security/PrivateRoute/PrivateRoute";
import Profile from "./components/Profile/Profile/Profile";
import PublicBiodatas from "./components/PublicBiodatas/PublicBiodatas";
import SingleBiodata from "./components/SingleBiodata/SingleBiodata/SingleBiodata";
import ContactRequest from "./components/ContactRequest/ContactRequest";
import AdminRoute from "./components/Security/AdminRoute/AdminRoute";
import DashboardHome from "./components/Dashboard/DahboardHome/DashboardHome";
import Proposal from "./components/Proposal/Proposal";
import Tutorial from "./components/Tutorial/Tutorial";

function App() {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/faq" element={<FAQ></FAQ>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/tutorial" element={<Tutorial></Tutorial>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/biodatas" element={<PublicBiodatas></PublicBiodatas>} />
          <Route
            path="biodatas/:biodatasId"
            element={<SingleBiodata></SingleBiodata>}
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile></Profile>
              </PrivateRoute>
            }
          />

          <Route
            path="contact-request/:biodatasId"
            element={
              <PrivateRoute>
                <Proposal></Proposal>
              </PrivateRoute>
            }
          />

          {/* <Route
            path="/contact-request"
            element={
              <PrivateRoute>
                <ContactRequest></ContactRequest>
              </PrivateRoute>
            }
          /> */}

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <AdminRoute>
                  <DashboardHome></DashboardHome>
                </AdminRoute>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </BrowserRouter>,

    document.getElementById("root")
  );
}

export default App;
