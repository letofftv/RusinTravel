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
import { Contacts } from './pages/Contacts';

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
            <Route path="blog" element={<Blog />} />
            <Route path="kontakty" element={<Contacts />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
