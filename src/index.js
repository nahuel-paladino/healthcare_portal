import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import Root from "./routes/root"
import ErrorPage from './routes/error';
import Login from './routes/login';
import Home from './routes/home';

const router = createBrowserRouter([
  {
    path: "/healthcare_portal",
    element: <Root />,
    errorElement: <ErrorPage />,
    // default to login page for convenience
    loader: async ({ request }) => {
      if (!request.url.endsWith("/login")) {
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
        path: "home",
        element: <Home />,
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
