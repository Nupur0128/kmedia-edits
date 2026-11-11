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

function App() {
  return (
    <>
      <Navbar />

      <main>
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
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
