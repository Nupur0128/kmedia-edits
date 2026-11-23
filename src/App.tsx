import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import PodcastVideoEditing from "./pages/PodcastVideoEditing";
import LongFormVideoEditing from "./pages/LongFormVideoEditing";
import ThumbnailDesigning from "./pages/ThumbnailDesigning";
import ShortsReelVideoEditing from "./pages/ShortsReelVideoEditing";
import YouTubeChannelManagement from "./pages/YouTubeChannelManagement";
import UGCVideoEditing from "./pages/UGCVideoEditing";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CustomCursor from "./components/CustomCursor";
// import Preloader from "./components/Preloader";
import FloatingProjectButton from "./components/FloatingProjectButton";

function App() {
  return (
    <>
      <CustomCursor />
      {/* <Preloader /> */}
      <Navbar />

      <main className="overflow-x-hidden w-full flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/long-form-video-editing"
            element={<LongFormVideoEditing />}
          />
          <Route
            path="/podcast-video-editing"
            element={<PodcastVideoEditing />}
          />
          <Route
            path="/UGC-video-editing"
            element={<UGCVideoEditing />}
          />
          <Route
            path="/thumbnail-designing"
            element={<ThumbnailDesigning />}
          />
          <Route
            path="/short-form-video-editing"
            element={<ShortsReelVideoEditing />}
          />
          <Route
            path="/youtube-channel-management"
            element={<YouTubeChannelManagement />}
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      <FloatingProjectButton />
    </>
  );
}

export default App;
