import { createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { Layout } from 'Layout';
import {
  AboutUsPage,
  ContactUsPage,
  HomePage,
  ImprintPage,
  NewsLetterPage,
  PrivacyPolicyPage,
  StockistsPage
} from 'Pages';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/issue/2" />
      },
      {
        path: '/issue/:issue',
        element: <HomePage />,
        children: []
      },
      {
        path: '/issue/:issue/about',
        element: <AboutUsPage />
      },
      {
        path: '/issue/:issue/contact-us',
        element: <ContactUsPage />
      },
      {
        path: '/issue/:issue/stockists',
        element: <StockistsPage />
      },
      {
        path: '/issue/:issue/privacy-policy',
        element: <PrivacyPolicyPage />
      },
      {
        path: '/issue/:issue/newsletter',
        element: <NewsLetterPage />
      },
      {
        path: '/issue/:issue/imprint',
        element: <ImprintPage />
      }
    ]
  }
]);
