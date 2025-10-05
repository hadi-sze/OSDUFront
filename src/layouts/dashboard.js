import * as React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Typography from '@mui/material/Typography';


import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
 
 
import logo2 from './nioclogo.png';

export default function Layout() {
//   const { session } = useSession();
//   const location = useLocation();

//   if (!session) {
//     // Add the `callbackUrl` search parameter
//     const redirectTo = `/sign-in?callbackUrl=${encodeURIComponent(location.pathname)}`;

//     return <Navigate to={redirectTo} replace />;
//   }

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <img src={logo2} className='Dash_logo' alt="logo" />
      {/* <CloudCircleIcon fontSize="large" color="primary" /> */}
      <Typography variant="h6">سامانه یکپارچه osdu</Typography>
      <Chip size="small" label="آزمایشی" color="info" />
      {/* <Tooltip title="Connected to production">
        <CheckCircleIcon color="success" fontSize="small" />
      </Tooltip> */}

    </Stack>
  );
}
  return (
    <DashboardLayout
     slots={{
            appTitle: CustomAppTitle,
          }} >
    
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
