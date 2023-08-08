import App from 'App';
import { ROUTES } from 'constants/route';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      // { index: true, element: <Navigate replace to={ROUTE_PATHS.OVERVIEW} /> },
      // {
      //   path: ROUTES.AUTH.SELF,
      //   element: <LayoutAuth />,
      //   children: [
      //     {
      //       index: true,
      //       element: <Navigate replace to={ROUTE_PATHS.AUTH.SIGN_IN} />,
      //     },
      //     { path: ROUTES.AUTH.SIGN_IN, element: <SignIn /> },
      //   ],
      // },
      // {
      //   path: ROUTES.SELF,
      //   element: <Layout appName="admin" />,
      //   children: [],
      // },
    ],
  },
  // { path: '*', element: <Error404 /> },
]);

export default router;
