import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import BabyCryAnalysis from './pages/BabyCryAnalysis';
import BabyCryAnalyzerApp from './pages/BabyCryAnalyzerApp';
import AiParentingTools from './pages/AiParentingTools';
import NewbornCareGuide from './pages/NewbornCareGuide';
import BabyFeedingGuide from './pages/BabyFeedingGuide';
import BabySleepTips from './pages/BabySleepTips';
import BabyHealthSymptoms from './pages/BabyHealthSymptoms';
import NewbornProblemsSolutions from './pages/NewbornProblemsSolutions';
import Desktop from './pages/Desktop';
import Testing from './pages/Testing-links';

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-text-body">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/baby-cry-analysis" element={<BabyCryAnalysis />} />
          <Route path="/baby-cry-analyzer-app" element={<BabyCryAnalyzerApp />} />
          <Route path="/ai-parenting-tools" element={<AiParentingTools />} />
          <Route path="/newborn-care-guide" element={<NewbornCareGuide />} />
          <Route path="/baby-feeding-guide" element={<BabyFeedingGuide />} />
          <Route path="/baby-sleep-tips" element={<BabySleepTips />} />
          <Route path="/baby-health-symptoms" element={<BabyHealthSymptoms />} />
          <Route path="/newborn-problems-solutions" element={<NewbornProblemsSolutions />} />
          <Route path="/testing-links" element={<Testing />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
