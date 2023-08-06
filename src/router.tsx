import { createBrowserRouter } from 'react-router-dom';
import { Layout } from 'Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <div>HOME PAGE</div>
      }
    ]
  }
]);
