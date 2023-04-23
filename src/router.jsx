import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
]);

export default router;
