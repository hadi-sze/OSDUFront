import * as React from 'react';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet } from 'react-router';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import GiteRoundedIcon from '@mui/icons-material/GiteRounded';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import OilBarrelTwoToneIcon from '@mui/icons-material/OilBarrelTwoTone';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import FactoryTwoToneIcon from '@mui/icons-material/FactoryTwoTone';
import TempleHinduTwoToneIcon from '@mui/icons-material/TempleHinduTwoTone';
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
        title: 'National iranian oil Company',
        icon: <DashboardIcon />,
        children: [
            {
                segment: 'NISOC',
                title: '(NISOC)',
                icon: <GiteRoundedIcon />,
                children: [
                    {
                        segment: 'karoon',
                        title: 'karoon',
                        icon: <OilBarrelTwoToneIcon />,

                    },
                    {
                        segment: 'Maroon',
                        title: 'Maroon',
                        icon: <BusinessTwoToneIcon />,
                    }]

            },
            {
                segment: 'AOGC',
                title: '(AOGC)',
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
                title: 'Pedec',
                icon: <GiteRoundedIcon />,
            },
            {
                segment: 'POGC',
                title: 'Pars OIL and Gas Company',
                icon: <GiteRoundedIcon />,
                children: [
                    {
                        segment: 'karoon',
                        title: ' karoon ',
                        icon: <OilBarrelTwoToneIcon />,

                    },
                    {
                        segment: 'Maroon',
                        title: 'Maroon',
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
        title: 'Refference',
        icon: <OilBarrelTwoToneIcon />,
        children: [
            {
                segment: 'BaseModels',
                title: 'BaseModels',
                icon: <DescriptionIcon />,
            },
            {
                segment: 'Well',
                title: 'Well',
                icon: <DescriptionIcon />,
                children: [
                    {
                        segment: 'R_WELL_CLASS',
                        title: 'R_WELL_CLASS',
                        icon: <DescriptionIcon />,
                    }],
            },
            {
                segment: 'WellBORE',
                title: 'WellBORE',
                icon: <DescriptionIcon />,
                children: [
                    {
                        segment: 'R_WELLBORE_TYPE',
                        title: 'R_WELLBORE_TYPE',
                        icon: <DescriptionIcon />,
                    }, {
                        segment: 'R_WELLBORE_TYPE',
                        title: 'R_WELLBORE_TYPE',
                        icon: <DescriptionIcon />,
                    }
                ],
            },
            {
                segment: 'WellTUBULAR',
                title: 'WellTUBULARls',
                icon: <DescriptionIcon />,
                children: [
                    {
                        segment: 'R_TUBULAR_TYPE',
                        title: 'R_TUBULAR_TYPE',
                        icon: <DescriptionIcon />,
                    }],
            },
            {
                segment: 'Field',
                title: 'Field',
                icon: <DescriptionIcon />,
                children: [
                    {
                        segment: 'R_FEILD_TYPE',
                        title: 'R_FEILD_TYPE',
                        icon: <DescriptionIcon />,
                    }],

            },
            {
                segment: 'Pool',
                title: 'Pool',
                icon: <DescriptionIcon />,
                children: [
                    {
                        segment: 'R_POOL_TYPE',
                        title: 'R_POO_TYPE',
                        icon: <ArrowCircleRightRoundedIcon />,
                    },
                    {
                        segment: 'R_POOL_STATUS',
                        title: 'R_POO_STATUS',
                        icon: <ArrowCircleRightRoundedIcon />,
                    }

                ],

            },
            {
                segment: 'Product',
                title: 'Product',
                icon: <FactoryOutlinedIcon />,
                children: [
                    {
                        segment: 'Report_Pruduct',
                        title: 'Report_Pruduct',
                        icon: <FactoryTwoToneIcon />,
                    },
                    {
                        segment: 'store',
                        title: 'store',
                        icon: <TempleHinduTwoToneIcon />,
                    }

                ],

            },
            {
                segment: 'General',
                title: 'General',
                icon: <DescriptionIcon />,
                children: [
                    {
                        segment: 'R_FEILD_TYPE',
                        title: 'R_FEILD_TYPE',
                        icon: <DescriptionIcon />,
                    }],

            },


            {
                segment: 'System',
                title: 'System',
                icon: <DescriptionIcon />,
                children: [
                    {
                        segment: 'R_ALARM_TYPE',
                        title: 'R_ALARM_TYPE',
                        icon: <DescriptionIcon />,
                    }],

            },
            {
                segment: 'Other',
                title: 'Other',
                icon: <DescriptionIcon />,
                children: [
                    {
                        segment: 'test',
                        title: 'test',
                        icon: <DescriptionIcon />,
                    }],

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

            <ReactRouterAppProvider
                navigation={NAVIGATION}
                branding={BRANDING}
                theme={demoTheme}
            >
                <Outlet />
            </ReactRouterAppProvider>

        </div>
    );
}
