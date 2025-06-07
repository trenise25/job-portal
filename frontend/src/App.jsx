import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Courses from './pages/Courses';
import Premium from './pages/Premium';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import AiResumeAnalyzer from './pages/AiResumeAnalyzer';
import JobInsights from './pages/JobInsights';
import PaymentGateway from './pages/PaymentGateway';
import CareerRoadmaps from './pages/CareerRoadmaps';
import React, { useEffect } from 'react';
import mermaid from 'mermaid';

function App() {
  useEffect(() => {
    mermaid.init({
      startOnLoad: true,
      securityLevel: 'loose',
    });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background transition-colors duration-300">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <div className="glass-card p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/premium" element={<Premium />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/ai-resume-analyzer" element={<AiResumeAnalyzer />} />
                <Route path="/job-insights" element={<JobInsights />} />
                <Route path="/payment-gateway" element={<PaymentGateway />} />
                <Route path="/roadmaps" element={<CareerRoadmaps />} />
                <Route path="/roadmaps/data-scientist" element={<CareerRoadmaps initialRoadmap="data-scientist" />} />
                <Route path="/roadmaps/ui-ux-designer" element={<CareerRoadmaps initialRoadmap="ui-ux-designer" />} />
                <Route path="/roadmaps/cybersecurity-analyst" element={<CareerRoadmaps initialRoadmap="cybersecurity-analyst" />} />
                <Route path="/roadmaps/project-manager" element={<CareerRoadmaps initialRoadmap="project-manager" />} />
              </Routes>
            </div>
          </main>
          <Footer />
          <Toaster 
            position="top-right"
            toastOptions={{
              className: 'glass-card',
              duration: 3000,
              style: {
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              },
            }}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;