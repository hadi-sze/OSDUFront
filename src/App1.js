import * as React from 'react';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet } from 'react-router';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import GiteRoundedIcon from '@mui/icons-material/GiteRounded';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import OilBarrelTwoToneIcon from '@mui/icons-material/OilBarrelTwoTone';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';

import './App.css';
import { createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
 

const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const NAVIGATION = [
    {
        kind: 'header',
        title: 'منوی اصلی',
    },

    {
        segment: 'Compony',
        title: 'شرکت ملی نفت ایران (NIOC)',
        icon: <DashboardIcon />,
        children: [
            {
                segment: 'NISOC',
                title: 'شرکت مناطق نفت خیز جنوب (NISOC)',
                icon: <GiteRoundedIcon />,
                children: [
                    {
                        segment: 'karoon',
                        title: ' نفت کارون',
                        icon: <OilBarrelTwoToneIcon />,

                    },
                    {
                        segment: 'Maroon',
                        title: 'شرکت بهره برداری نفت و گاز مارون',
                        icon: <BusinessTwoToneIcon />,
                    }]

            },
            {
                segment: 'AOGC',
                title: 'شرکت نفت و گاز ادوندان (AOGC)',
                icon: <GiteRoundedIcon />,
            },
            {
                segment: 'ICOFC',
                title: 'شرکت نقت مناطق مرکزی (ICOFC)',
                icon: <GiteRoundedIcon />,
                children: [
                    {
                        segment: 'karoon',
                        title: ' گاز ',
                        icon: <OilBarrelTwoToneIcon />,

                    }]
            },
            {
                segment: 'PEDEC',
                title: 'شرکت مهندسی و توسعه (PEDEC)',
                icon: <GiteRoundedIcon />,
            },
            {
                segment: 'POGC',
                title: 'شرکت نفت و گاز پارس (POGC)',
                icon: <GiteRoundedIcon />,
                children: [
                    {
                        segment: 'karoon',
                        title: ' گاز ',
                        icon: <OilBarrelTwoToneIcon />,

                    },
                    {
                        segment: 'Maroon',
                        title: 'شرکت بهره برداری گاز ',
                        icon: <OilBarrelIcon />,
                    }]
            },




        ]
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
        segment: 'baseModels',
        title: 'اطلاعات اصلی',
        icon: <OilBarrelTwoToneIcon />,
        children: [
            {
                segment: 'Well',
                title: 'چاه',
                icon: <DescriptionIcon />,
            },
            {
                segment: 'Field',
                title: 'مخزن',
                icon: <DescriptionIcon />,

            }]
    },

    {
        kind: 'divider',
    },
    {
        segment: 'Base',
        title: 'اطلاعات پایه',

    },
];

const BRANDING = {
    title: 'My Toolpad Core App',
};
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
export default function App1() {



    return (
        <div className="App">
            <CacheProvider value={cacheRtl}>
                <ReactRouterAppProvider
                    navigation={NAVIGATION}
                    branding={BRANDING}
                    theme={demoTheme}
                >
                    <Outlet />
                </ReactRouterAppProvider>
            </CacheProvider>
        </div>
    );
}
