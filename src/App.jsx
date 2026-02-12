import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import BlogDetail9 from './pages/BlogDetail9';
import BlogDetail10 from './pages/BlogDetail10';
import BabyCryAnalysis from './pages/BabyCryAnalysis';
import BabyCryAnalyzerApp from './pages/BabyCryAnalyzerApp';
import AiParentingTools from './pages/AiParentingTools';
import NewbornCareGuide from './pages/NewbornCareGuide';
import BabyFeedingGuide from './pages/BabyFeedingGuide';
import BabySleepTips from './pages/BabySleepTips';
import BabyHealthSymptoms from './pages/BabyHealthSymptoms';
import NewbornProblemsSolutions from './pages/NewbornProblemsSolutions';
import BlogDetail1 from './pages/BlogDetail1';
import BlogDetail2 from './pages/BlogDetail2';
import BlogDetail3 from './pages/BlogDetail3';
import BlogDetail4 from './pages/BlogDetail4';
import BlogDetail5 from './pages/BlogDetail5';
import BlogDetail6 from './pages/BlogDetail6';
import BlogDetail7 from './pages/BlogDetail7';
import BlogDetail8 from './pages/BlogDetail8';
import BlogDetail11 from './pages/BlogDetail11';
import Desktop from './pages/Desktop';

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
          <Route path="/blogs/smart-baby-care-app" element={<BlogDetail1 />} />
          <Route path="/blogs/smart-parenting-guidance" element={<BlogDetail2 />} />
          <Route path="/blogs/baby-cry-analyzer-app" element={<BlogDetail3 />} />
          <Route path="/blogs/newborn-sleep-tips" element={<BlogDetail4 />} />
          <Route path="/blogs/newborn-health-signs" element={<BlogDetail5 />} />
          <Route path="/blogs/baby-feeding-guide" element={<BlogDetail6 />} />
          <Route path="/blogs/embrace-smart-parenting" element={<BlogDetail7 />} />
          <Route path="/blogs/beyond-google-parenting-whatsapp" element={<BlogDetail8 />} />
          <Route path="/blogs/smart-baby-care-app-to-support-modern-parenting" element={<BlogDetail9 />} />
          <Route path="/blogs/your-babys-behavior-is-telling-you-something-heres-what-it-means" element={<BlogDetail11 />} />
          <Route path="/blogs/worried-about-your-babys-health-signs-and-symptoms-parents-should-not-ignore" element={<BlogDetail10 />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/baby-cry-analysis" element={<BabyCryAnalysis />} />
          <Route path="/baby-cry-analyzer-app" element={<BabyCryAnalyzerApp />} />
          <Route path="/ai-parenting-tools" element={<AiParentingTools />} />
          <Route path="/newborn-care-guide" element={<NewbornCareGuide />} />
          <Route path="/baby-feeding-guide" element={<BabyFeedingGuide />} />
          <Route path="/baby-sleep-tips" element={<BabySleepTips />} />
          <Route path="/baby-health-symptoms" element={<BabyHealthSymptoms />} />
          <Route path="/newborn-problems-solutions" element={<NewbornProblemsSolutions />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
