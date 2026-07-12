import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import BackToTop from '../components/common/BackToTop.jsx';
import WhatsAppButton from '../components/common/WhatsAppButton.jsx';

/**
 * MainLayout
 * Wraps every route with the persistent Header and Footer, plus the
 * site-wide floating BackToTop and WhatsApp buttons.
 * <Outlet /> renders the active page's content in between.
 */
export default function MainLayout() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
