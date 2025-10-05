import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App1 from './App1';
import Layout from './layouts/dashboard';
import DashboardPage from './Pages/index';
import FeildModels from './Pages/BaseModels/FeildModels';
import { Typography } from '@mui/material'; 
import WellModels from './Pages/BaseModels/WellModels';

const router = createBrowserRouter([
  {
    Component: App1,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '/',
            Component: DashboardPage,
          },
          {
            path: '/orders',
            Component: Test1,
          },
          {
            path: '/Compony/NISOC/karoon',
            Component: Test1,
          },

          {
            
            path: '/baseModels/Field',
            Component: FeildModels,
          },
          {
            path: '/baseModels/Well',
            Component: WellModels,
          },   
          


           



        ],
      },
      {
        path: '/sign-in',
        Component: Test2,
      },
    ],
  },
]);

function Test1() {
  return (<>
    <Typography>اطلاعات \ایه</Typography></>)
}
function Test2() {
  return (<>
    <Typography>hello</Typography></>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,

  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
