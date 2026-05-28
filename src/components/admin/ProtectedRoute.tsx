import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const [status, setStatus] = useState<'loading' | 'ok' | 'denied'>('loading');

  useEffect(() => {
    fetch('/api/auth.php', { credentials: 'include' })
      .then(r => r.json())
      .then(d => setStatus(d.authenticated ? 'ok' : 'denied'))
      .catch(() => setStatus('denied'));
  }, []);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-turquoise border-t-transparent rounded-full" />
      </div>
    );
  }

  if (status === 'denied') {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};
