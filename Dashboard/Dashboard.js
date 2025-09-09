import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import OilBarrelTwoToneIcon from '@mui/icons-material/OilBarrelTwoTone';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
 
import Tooltip from '@mui/material/Tooltip';
import { PageContainer } from '@toolpad/core/PageContainer';
import GetGrid1 from './GetGrid1';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import { useNavigation } from "react-router"
import { BrowserRouter, Routes, Route, Links, NavLink } from "react-router";
import Well from './compnn/Well';
import logo2 from './nioclogo.png';
import DrawerF from './compnn/DrawerF';
import DrawerC from './compnn/Draw'; 
import { Sheet } from '@mui/joy';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'منوی اصلی',
  },
  {
    segment: 'dashboard',
    title: 'خانه',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'تولیدات',
    icon: <OilBarrelIcon />,
  },
  {
    segment: 'well',
    title: 'چاه',
    icon: <OilBarrelTwoToneIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'گزارش گیری',
  },
  {
    segment: 'reports',
    title: 'گزارش ها',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'dailyremoprt',
        title: 'گزارش روزانه',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'sales',
        title: 'گزارش ماهانه تولید',
        icon: <DescriptionIcon />,
      }, {
        segment: 'Gassales',
        title: 'گزارش روزانه گاز',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'mounthsales',
        title: 'گزارش ماهانه تولید گاز',
        icon: <DescriptionIcon />,
      },

      {
        segment: 'traffic',
        title: 'گزارش بر اساس معاونت ها',
        icon: <DescriptionIcon />,

      },
    ],
  },
  {
    segment: 'integrations',
    title: 'گزارش تجمیعی',
    icon: <LayersIcon />,



  },
];


const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});
function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <img src={logo2} className='Dash_logo' alt="logo" />
      {/* <CloudCircleIcon fontSize="large" color="primary" /> */}
      <Typography variant="h6">سامانه یکپارچه osdu</Typography>
      <Chip size="small" label="آزمایشی" color="info" />
      <Tooltip title="Connected to production">
        <CheckCircleIcon color="success" fontSize="small" />
      </Tooltip>

    </Stack>
  );
}
function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {



  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.



  useEffect(() => {
    document.addEventListener('click', function (event) {
      const clickedElement = event.target;
      console.log('The clicked element is 1:', clickedElement);
      console.log('The clicked element is 1.name:', clickedElement.tagName);
      var hrefdd = document.querySelector('a').getAttribute('href');
      console.log("link is0", hrefdd)
      var hreff = clickedElement.getAttribute('href');
      console.log("link is1", hreff)

      if (hreff == "/integrations") {
        window.location.href = '/integrations'
      }
      if (hreff == "/orders") {
        window.location.href = '/SignIn1'
      }
      if (hreff == "/well") {
        window.location.href = '/well'
      }

      console.log('The clicked element is 2:', event);
      // You can then access properties of clickedElement, e.g., clickedElement.id, clickedElement.tagName
    });



    var href = document.querySelector('a').getAttribute('href');

    console.log("link is 2", href);


    // document.addEventListener('focus', function (event) {
    //   const clickedElement = event.target;
    //   console.log('The coucous element is:', clickedElement);
    //   console.log('The coucous element is:', event);
    //   // You can then access properties of clickedElement, e.g., clickedElement.id, clickedElement.tagName
    // });


    // var links = Array.from(document.querySelectorAll('a')).map(link => link.href);
    // console.log("links3", links);

  }, [1]);
  return (
    // Remove this provider when copying and pasting into your project.
    <>
     
      <AppProvider
        close={"true"}
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}

      >
        <DashboardLayout  
          slots={{
            appTitle: CustomAppTitle,
          }} >
          <PageContainer >

            <>
             
              <div>
             

{/*               
             
             <Sheet color="primary" variant="soft" >
<a>test</a>
              </Sheet> */}

              </div>
              <BrowserRouter>
                <Routes>
                  <Route index element={<F1 />} />
                  <Route exact path="/getgrid" element={<GetGrid1 />} />
                  <Route exact path="/SignIn1" element={<F1 />} />
                  <Route exact path="/integrations" element={<GetGrid1 />} />
                  <Route exact path="/well" element={<Well />} />
                  <Route exact path="/DrawerF" element={<DrawerF />} />
                </Routes>
              </BrowserRouter>

            </>
          </PageContainer>
        </DashboardLayout>
      </AppProvider>
    </>

  );
}

const F2 = () => {
  return (
    <>
      <Typography bold color='gray'>2</Typography>
    </>
  )
}
const F1 = () => {
  return (
    <>
      <Typography bold color='gray'>1</Typography>
    </>
  )
}



export default DashboardLayoutBasic;


