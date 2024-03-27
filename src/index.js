import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createBrowserRouter, Outlet, RouterProvider, redirect } from 'react-router-dom';
import Root from "./routes/root"
import ErrorPage from './routes/error';
import Login from './routes/login';
import Home from './routes/home';
import Dashboard from './routes/dashboard';

const router = createBrowserRouter([
  {
    path: "/healthcare_portal",
    element: <Root />,
    errorElement: <ErrorPage />,
    // default to login page for convenience
    loader: async ({ request }) => {
      if (request.url.endsWith("/healthcare_portal")) {
        return redirect("login")
      }
      return null;
    },
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/healthcare_portal",
        element: <Home />,
        children: [
          {
            path: "home",
            element: <Dashboard />,
          },
          {
            path: "my-health",
            element: <Dashboard />,
          },
          {
            path: "records",
            element: <Outlet />,
            children: [
              {
                path: "hospitalizations",
                element: <div>Hospitalizations</div>
              },
              {
                path: "special-visits",
                element: <div>Special Visits</div>
              },
              {
                path: "immunizations",
                element: <div>Immunizations</div>
              },
              {
                path: "test-results",
                element: <div>Test Results</div>
              },
            ]
          },
          {
            path: "settings",
            element: <Dashboard />,
          },
        ]
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
