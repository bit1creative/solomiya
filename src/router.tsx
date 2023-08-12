import { createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Layout } from 'Layout';

import { HeroSection } from 'Components/pages/Home/HeroSection';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/issue/1" />
      },
      {
        path: '/issue/:issue',
        element: <HeroSection />
      }
    ]
  }
]);
