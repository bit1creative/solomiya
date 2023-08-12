import { createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Layout } from 'Layout';

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
        element: <div className="grid h-full place-items-center">HOME PAGE</div>
      }
    ]
  }
]);
