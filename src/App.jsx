import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserTypeSelection from './pages/UserTypeSelection';
import PasswordLogin from './pages/PasswordLogin';
import StudentForm from './pages/StudentForm';
import CareerTestIntro from './pages/CareerTestIntro';
import CareerTest from './pages/CarrerTest'; // ✅ Fixed spelling
import StreamSelection from './pages/StreamSelection';
import StreamTest from './pages/StreamTest';
import CareerSuggestions from './pages/CareerSuggestions';
import Resources from './pages/Resources';
import CollegeExams from './pages/CollegeExams';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import CarrerPath from './pages/CarrerPath'; // ✅ Confirm spelling if intentional
import CollegeList from './pages/CollegeList';
import SkillDevelopment from './pages/SkillDevelopment';
import UserForm from './pages/UserForm'; // ✅ Fixed usage

// New Stream Pages
import ScienceStream from './pages/ScienceStream';
import CommerceStream from './pages/CommerceStream';
import ArtsStream from './pages/ArtsStream';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AppWrapper = () => {
  const location = useLocation();

  const hideNavbarRoutes = [
    '/login',
    '/signup',
    '/usertypeselection',
    '/login-with-password',
    '/student-form',
    '/user-form',
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/usertypeselection" element={<UserTypeSelection />} />
        <Route path="/login-with-password" element={<PasswordLogin />} />
        <Route path="/student-form" element={<StudentForm />} />
        <Route path="/user-form" element={<UserForm />} /> {/* ✅ Fixed */}
        
        {/* Career Test Flow */}
        <Route path="/career-test" element={<CareerTestIntro />} />
        <Route path="/career-quizzes" element={<CareerTest />} />

        {/* Stream Selection & Test Flow */}
        <Route path="/stream-selection" element={<StreamSelection />} />
        <Route path="/streamTest" element={<StreamTest />} />
        
        {/* Individual Stream Pages */}
        <Route path="/science-stream" element={<ScienceStream />} />
        <Route path="/commerce-stream" element={<CommerceStream />} />
        <Route path="/arts-stream" element={<ArtsStream />} />

        {/* Other Pages */}
        <Route path="/career-suggestions" element={<CareerSuggestions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/college-exams" element={<CollegeExams />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carrerPath" element={<CarrerPath />} />
        <Route path="/collegelist" element={<CollegeList />} />
        <Route path="/skilldevelopment" element={<SkillDevelopment />} />

        {/* 404 Not Found */}
        <Route path="*" element={<h1 className="text-center text-4xl mt-20">404 - Page Not Found</h1>} />
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
