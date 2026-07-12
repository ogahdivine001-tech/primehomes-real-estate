import SEO from "../components/common/SEO.jsx";
import Hero from "../components/sections/Hero.jsx";
import FeaturedProperties from "../components/sections/FeaturedProperties.jsx";
import CompanyStats from "../components/sections/CompanyStats.jsx";
import AboutCompany from "../components/sections/AboutCompany.jsx";
import WhyChooseUs from "../components/sections/WhyChooseUs.jsx";
import ServicesSection from "../components/sections/ServicesSection.jsx";
import FeaturedLocations from "../components/sections/FeaturedLocations.jsx";
import MeetOurAgents from "../components/sections/MeetOurAgents.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import VideoSection from "../components/sections/VideoSection.jsx";
import GallerySection from "../components/sections/GallerySection.jsx";
import BlogSection from "../components/sections/BlogSection.jsx";
import FAQSection from "../components/sections/FAQSection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";
import Newsletter from "../components/sections/Newsletter.jsx";

/**
 * Home page
 * Composes all 18 homepage sections in order: Hero, Property Search,
 * Featured Properties, Company Stats, About, Why Choose Us, Services,
 * Featured Locations, Meet Our Agents, Testimonials, Video, Gallery,
 * Blog, FAQ, Contact, and Newsletter (Header/Footer live in MainLayout).
 */
export default function Home() {
  return (
    <>
      <SEO
        title="PrimeHomes Real Estate | Luxury Homes, Estates & Penthouses"
        description="Discover exceptional luxury homes, penthouses, and estates with PrimeHomes Real Estate. Premium properties, expert agents, seamless service."
      />
      <Hero />
      <FeaturedProperties />
      <CompanyStats />
      <AboutCompany />
      <WhyChooseUs />
      <ServicesSection />
      <FeaturedLocations />
      <MeetOurAgents />
      <Testimonials />
      <VideoSection />
      <GallerySection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <Newsletter />
    </>
  );
}
