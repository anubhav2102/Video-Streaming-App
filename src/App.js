import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Layout/Header/Header.jsx";
import Courses from './components/Courses/Courses.jsx';
import Footer from "./components/Layout/Footer/Footer.jsx";
import Login from './components/Auth/Login/Login.jsx';
import Register from "./components/Auth/Register/Register.jsx";
import ForgotPassword from "./components/Auth/Login/ForgotPassword.jsx";
import ResetPassword from './components/Auth/Login/ResetPassword.jsx';
import Contact from './components/Contact/Contact.jsx';
import Request from "./components/Request/Request.jsx"
import About from "./components/About/About.jsx";
import Subscribe from "./components/Payments/Subscribe.jsx";
import PaymentFail from "./components/Payments/PaymentFail.jsx";
import PaymentSuccess from "./components/Payments/PaymentSuccess.jsx";
import NotFound from "./components/Layout/NotFound/NotFound.jsx";
import CoursePage from './components/CoursePage/CoursePage.jsx';
import Profile from "./components/Profile/Profile.jsx";
import ChangePassword from "./components/Profile/ChangePassword.jsx";
import UpdateProfile from "./components/Profile/UpdateProfile.jsx";

function App() {
  
  window.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
  })

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/course/:id" element={<CoursePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/changepassword" element={<ChangePassword/>}/>
        <Route path="/updateprofile" element={<UpdateProfile/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/resetpassword/:token" element={<ResetPassword/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/request" element={<Request/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/subscribe" element={<Subscribe/>}/>
        <Route path="/paymentfail" element={<PaymentFail/>}/>
        <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
