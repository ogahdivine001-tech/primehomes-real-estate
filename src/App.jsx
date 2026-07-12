import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import LoadingScreen from './components/common/LoadingScreen.jsx';
import ScrollManager from './components/common/ScrollManager.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Properties from './pages/Properties.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';
import Agents from './pages/Agents.jsx';
import AgentDetails from './pages/AgentDetails.jsx';
import Services from './pages/Services.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import NotFound from './pages/NotFound.jsx';

/**
 * App
 * Top-level route map. Every page is nested inside MainLayout so the
 * Header and Footer persist across navigation without re-mounting.
 */
export default function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollManager />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:slug" element={<PropertyDetails />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/:slug" element={<AgentDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
