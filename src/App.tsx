import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PageLayout } from './components/layout/PageLayout';
import { Home } from './pages/Home';
import { Excursions } from './pages/Excursions';
import { ExcursionDetail } from './pages/ExcursionDetail';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { BlogPostPage } from './pages/BlogPost';
import { Events } from './pages/Events';
import { EventDetail } from './pages/EventDetail';
import { Contacts } from './pages/Contacts';
import { NotFound } from './pages/NotFound';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { Offer } from './pages/legal/Offer';
import { PersonalDataConsent } from './pages/legal/PersonalDataConsent';
import { BookingRules } from './pages/legal/BookingRules';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="ekskursii" element={<Excursions />} />
            <Route path="ekskursii/:slug" element={<ExcursionDetail />} />
            <Route path="obo-mne" element={<About />} />
            <Route path="galereya" element={<Gallery />} />
            <Route path="events" element={<Events />} />
            <Route path="events/:slug" element={<EventDetail />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
            <Route path="kontakty" element={<Contacts />} />
            <Route path="legal/privacy" element={<PrivacyPolicy />} />
            <Route path="legal/offer" element={<Offer />} />
            <Route path="legal/personal-data" element={<PersonalDataConsent />} />
            <Route path="legal/booking-rules" element={<BookingRules />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
