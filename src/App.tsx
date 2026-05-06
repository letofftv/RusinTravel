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
    <div style={{ padding: '100px', textAlign: 'center', fontSize: '24px' }}>
      <h1>RusinTravel Debug</h1>
      <p>Если вы видите этот текст, значит React работает.</p>
    </div>
  );
}
