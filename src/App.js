import React from 'react';
import './App.css';
import { createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

import Dashbord from './Component/Dashboard/Dashboard'

import { Outlet, useNavigate } from 'react-router';

import { createBrowserRouter, RouterProvider } from 'react-router';
import { Button, Typography } from '@mui/material';
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const router = createBrowserRouter([
  {
    Component: Dashbord,
    children: [
      {
        path: '/',
        Component: Test1,
        children: [
          {
            path: '',
            Component: Test2,
          },
          {
            path: 'Compony/NISOC/karoon',
            Component: Test3,
          },
        ],
      },
    ],
  },
]);
function Test1() {
  return (
    <>

      <Button>sgh</Button>


    </>
  )

}
function Test2() {
  return (
    <>
      <Typography>test2</Typography>
     
      <Typography>test2</Typography>

    </>
  )

}
function Test3() {
  return (
    <>
      <Typography>test3</Typography>
    
      <Typography>test3</Typography>


    </>
  )

}
function App() {
  return (
    <>



      <div className="App">
       
          <RouterProvider router={router} />
          <BrowserRouter>
            <Outlet />
          </BrowserRouter>
     
      </div>
    </>
  );
}

export default App;
