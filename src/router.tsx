import { createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Layout } from 'Layout';

import { AboutUsPage, ContactUsPage, HomePage } from 'Pages';

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
        element: <HomePage />
      },
      {
        path: '/about-us',
        element: <AboutUsPage />
      },
      {
        path: '/contact-us',
        element: <ContactUsPage />
      }
    ]
  }
]);
