import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import { DataProvider } from './context/DataContext';

import { AdminLogin } from './pages/admin/Login';
import { AdminDashboard } from './pages/admin/Dashboard';
import { ProtectedRoute } from './components/admin/ProtectedRoute';

import { AdminEvents } from './pages/admin/Events';
import { AdminBlog } from './pages/admin/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "ekskursii", element: <Excursions /> },
      { path: "ekskursii/:slug", element: <ExcursionDetail /> },
      { path: "obo-mne", element: <About /> },
      { path: "galereya", element: <Gallery /> },
      { path: "events", element: <Events /> },
      { path: "events/:slug", element: <EventDetail /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogPostPage /> },
      { path: "kontakty", element: <Contacts /> },
      { path: "legal/privacy", element: <PrivacyPolicy /> },
      { path: "legal/offer", element: <Offer /> },
      { path: "legal/personal-data", element: <PersonalDataConsent /> },
      { path: "legal/booking-rules", element: <BookingRules /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "events", element: <AdminEvents /> },
      { path: "tours", element: <div className="p-8">Управление экскурсиями (в разработке)</div> },
      { path: "blog", element: <AdminBlog /> },
      { path: "settings", element: <div className="p-8">Настройки сайта (в разработке)</div> },
    ],
  },
]);

export default function App() {
  return (
    <HelmetProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </HelmetProvider>
  );
}
