import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Global styles (order matters: variables -> global -> animations)
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';

// Font Awesome icons (used throughout: nav, cards, socials, etc.)
import '@fortawesome/fontawesome-free/css/all.min.css';

// SwiperJS core styles (testimonials, gallery, featured properties sliders)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ThemeProvider } from './context/ThemeContext.jsx';
import { FavoritesProvider } from './context/FavoritesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
