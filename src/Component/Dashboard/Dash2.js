import * as React from 'react';
//import { Outlet } from 'react-router';
import './dashboard.css';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import logo from './logo.svg';
import logo2 from './nioclogo.png';
//import logo2 from 'https://fa.wikipedia.org/wiki/%D9%BE%D8%B1%D9%88%D9%86%D8%AF%D9%87:National_Iranian_Oil_Company_logo.svg';

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
        title: 'بازرگانی',
        icon: <ShoppingCartIcon />,
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
                segment: 'sales1',
                title: 'گزارش روزانه',
                icon: <DescriptionIcon />,
            },
            {
                segment: 'sales2',
                title: 'گزارش ماهانه تولید',
                icon: <DescriptionIcon />,
            }, {
                segment: 'sales3',
                title: 'گزارش روزانه گاز',
                icon: <DescriptionIcon />,
            },
            {
                segment: 'sales4',
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

// <AppProvider
//             navigation={NAVIGATION}
//             branding={{
//                 logo:   <img src={logo} alt="لوگوی نفت" />,
//                 title: 'سامانه OSDU',
//                 homeUrl: '/toolpad/core/introduction',
//             }}

//         ></AppProvider>

export default function Layout(props) {

    return (

        <AppProvider
            navigation={NAVIGATION}
            theme={demoTheme}
        >
            <DashboardLayout
                slots={{
                    appTitle: CustomAppTitle,
                }} >
                <PageContainer >

                    <>
                        <Typography bold color='gray'>تست</Typography>
                    </>
                </PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
}