import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import OilBarrelTwoToneIcon from '@mui/icons-material/OilBarrelTwoTone';
import { useDemoRouter } from '@toolpad/core/internal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Tooltip from '@mui/material/Tooltip';
import { PageContainer } from '@toolpad/core/PageContainer';
import { themeQuartz } from 'ag-grid-community';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { AgGridReact } from 'ag-grid-react';
import { BrowserRouter, Routes, Route, } from "react-router";
import Well from './compnn/Well';
import logo2 from './nioclogo.png';
import DrawerF from './compnn/DrawerF';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { CssVarsProvider } from '@mui/joy/styles';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import ScopedCssBaseline from '@mui/joy/ScopedCssBaseline';
import GiteRoundedIcon from '@mui/icons-material/GiteRounded';
import Drawer from '@mui/joy/Drawer';
import Sheet from '@mui/joy/Sheet';

import Checkbox from '@mui/joy/Checkbox';
import Done from '@mui/icons-material/Done';
import FormHelperText from '@mui/joy/FormHelperText';
import ModalClose from '@mui/joy/ModalClose';

import AspectRatio from '@mui/joy/AspectRatio';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {
  ClientSideRowModelModule, NumberEditorModule, extEditorModule, alidationModule,
} from "ag-grid-community";

import { Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useCallback, useMemo } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';

import Add from '@mui/icons-material/Add';
import Textarea from '@mui/joy/Textarea';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Divider, IconButton, RadioGroup, Radio } from '@mui/joy';
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
    segment: 'well',
    title: 'اطلاعات اصلی',
    icon: <OilBarrelTwoToneIcon />,
    children: [
      {
        segment: 'well',
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
ModuleRegistry.registerModules([AllCommunityModule]);

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {



  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.



  // useEffect(() => {
  //   document.addEventListener('click', function (event) {
  //     const clickedElement = event.target;
  //     console.log('The clicked element is 1:', clickedElement);
  //     console.log('The clicked element is 1.name:', clickedElement.tagName);
  //     var hrefdd = document.querySelector('a').getAttribute('href');
  //     console.log("link is0", hrefdd)
  //     var hreff = clickedElement.getAttribute('href');
  //     console.log("link is1", hreff)

  //     if (hreff == "/integrations") {
  //       window.location.href = '/integrations'
  //     }
  //     if (hreff == "/orders") {
  //       window.location.href = '/SignIn1'
  //     }
  //     if (hreff == "/well") {
  //       window.location.href = '/well'
  //     }

  //     console.log('The clicked element is 2:', event);
  //     // You can then access properties of clickedElement, e.g., clickedElement.id, clickedElement.tagName
  //   });



  //   var href = document.querySelector('a').getAttribute('href');

  //   console.log("link is 2", href);


  // }, [1]);
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

              <Gridss />
              {/* <Routes>
                <Route element={<Well />}>
                  <Route path=":Dashboard/well" element={<Well />} />
                  <Route path="GetGrid1" element={<GetGrid1 />} />
                </Route>
                <Route index element={<Well />} />
                <Route exact path="/dash/getgrid" element={<GetGrid1 />} />
                <Route exact path="/SignIn1" element={<F2 />} />
                <Route exact path="/integrations" element={<GetGrid1 />} />
                <Route exact path="/Dash/well" element={<Well />} />
                <Route exact path="/DrawerF" element={<DrawerF />} />
              </Routes> */}
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


const columnDefs = [
  { field: "athlete" },
  { field: "age" },
  { field: "country" },
  { field: "year" },
  { field: "date" },
  { field: "sport" },
  { field: "gold" },
  { field: "silver" },
  { field: "bronze" },
  { field: "total" },
];

let gridApi;
const Gridoption3 = {
  enableRtl: true,

}
const gridOptions = {

  enableRtl: true,
  defaultColDef: {
    filter: "agTextColumnFilter",
    floatingFilter: true,
    flex: 1,
    minWidth: 100,

  },


  rowSelection: {
    mode: "multiRow",
    headerCheckbox: false,
  },

  pagination: true,
  paginationPageSize: 10,
  paginationPageSizeSelector: [10, 25, 50],


};
const myTheme = themeQuartz
  .withParams({
    accentColor: "#087AD1",
    backgroundColor: "#FFFFFF",
    borderColor: "#D7E2E6",
    borderRadius: 2,
    browserColorScheme: "light",
    cellHorizontalPaddingScale: 0.7,
    chromeBackgroundColor: {
      ref: "backgroundColor"
    },
    columnBorder: false,
    fontFamily: {
      googleFont: "Inter"
    },
    fontSize: 13,
    foregroundColor: "#555B62",
    headerBackgroundColor: "#FFFFFF",
    headerFontSize: 13,
    headerFontWeight: 400,
    headerTextColor: "#84868B",
    rowBorder: true,
    rowVerticalPaddingScale: 0.8,
    sidePanelBorder: true,
    spacing: 6,
    wrapperBorder: false,
    wrapperBorderRadius: 2
  });

const Gridss = () => {
  const [Basemodels, SetBasemodels] = useState(0)

  const [rowData, setRowData] = useState([
    { نام: "اروند", کد: "ar_30", شماره: 64950, فعال: true, makee: "Tesla", مختصات: 330.20, عمق: 64950, },
    { نام: "az_20", کد: "F-ar_30", شماره: 33850, فعال: false, makee: "Tesla", مختصات: 430.200, عمق: 64950 },
    { نام: "ahvz_30", کد: "ar_30", شماره: 29600, فعال: false, makee: "Tesla", مختصات: 300.230000, عمق: 64950 },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "نام" },
    { field: "کد" },
    { field: "مختصات" },
    { field: "فعال" },
    { field: "شماره" },
    { field: "عمق" }
  ]);
  const [Title1, setTitle1] = useState("جدول اطلاعات")




  const [rowData1, setRowData1] = useState();
  const [columnDefs1, setColumnDefs1] = useState([
    { field: "athlete", minWidth: 160 },
    { field: "age" },
    { field: "country", minWidth: 140 },
    { field: "year" },
    { field: "date", minWidth: 140 },
    { field: "sport", minWidth: 160 },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ]);




  const Rowselected = (e) => {

    console.log("click", e)
    const getrow = e.data;
    console.log("getrow", getrow)



  }
  let rowImmutableStore;

  const getRowId = useCallback((params) => String(params.data.id), []);

  const onGridReady = useCallback((params) => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach((item, index) => (item.id = index));
        rowImmutableStore = data;
        setRowData1(rowImmutableStore);
      });
  }, []);
  const defaultColDef1 = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      editable: true,
    };
  }, []);
  const onCellEditRequest = useCallback(
    (event) => {
      console.log("Event", event)
      const data = event.data;
      const field = event.colDef.field;
      const newValue = event.newValue;
      const oldItem = rowImmutableStore.find((row) => row.id === data.id);
      if (!oldItem || !field) {
        return;
      }
      const newItem = { ...oldItem };
      newItem[field] = newValue;
      console.log("onCellEditRequest, updating " + field + " to " + newValue);
      rowImmutableStore = rowImmutableStore.map((oldItem) =>
        oldItem.id == newItem.id ? newItem : oldItem,
      );
      setRowData1(rowImmutableStore);
      console.log("rowImmutableStore", rowImmutableStore)

    },
    [rowImmutableStore],
  );

  useEffect(() => {
    console.log(Basemodels)

    ChechMaster(Basemodels)
  }, [Basemodels]);

  function Operat_btn() {


    let eGui = document.createElement('div');



    return eGui;
  }

  function actionCellRenderer(params) {
    let eGui = document.createElement('div');

    let editingCells = params.api.getEditingCells();
    // checks if the rowIndex matches in at least one of the editing cells
    let isCurrentRowEditing = editingCells.some((cell) => {
      return cell.rowIndex === params.node.rowIndex;
    });

    if (isCurrentRowEditing) {
      eGui.innerHTML = `
        <button  
          class="action-button update"
          data-action="update">
               update  
        </button>
        <button  
          class="action-button cancel"
          data-action="cancel">
               cancel
        </button>
        `;
    } else {
      eGui.innerHTML = `
        <button 
          class="action-button edit"  
          data-action="edit">
             edit 
          </button>
        <button 
          class="action-button delete"
          data-action="delete">
             delete
        </button>
        `;
    }

    return eGui;
  }
  const ChechMaster = (Basemodels) => {
    let clicked = Basemodels;

    console.log("in checkmaster", clicked)
    if (clicked == 1) {
      setTitle1("اطلاعات چاه")
      setColDefs([{
        field: "WellName"
      },
      { field: "WellCode" },
      { field: "Compony" },
      { field: "Geo" },
      { field: "State" },
      { field: "status" },
      { field: "depth" }])
      setRowData([{
        WellName: 'AH_20',
        WellCode: "pedec_ah_20",
        Compony: "Pedec",
        Geo: '3234,1323',
        status: 'Dective',
        State: 'Production',
        depth: "30000"
      },
      {
        WellName: 'AH_20',
        WellCode: "pedec_ah_20",
        Compony: "Pedec",
        Geo: '3234,1323',
        status: 'Dective',
        State: 'Production',
        depth: "30000"
      },
      {
        WellName: 'AH_20',
        WellCode: "pedec_ah_20",
        Compony: "Pedec",
        Geo: '3234,1323',
        status: 'Dective',
        State: 'Production',
        depth: "10000"
      }, {
        WellName: 'AH_20',
        WellCode: "pedec_ah_20",
        Compony: "Pedec",
        Geo: '3234,1323',
        status: 'Dective',
        State: 'Production',
        depth: "20000"
      },
      {
        WellName: 'AH_40',
        WellCode: "pedec_ah_430",
        Compony: "Pedec",
        Geo: '3234,1323',
        status: 'Dective',
        State: 'Production',
        depth: "610000"
      },
      {
        WellName: 'AH_50',
        WellCode: "pedec_ah_50",
        Compony: "Pedec",
        Geo: '3234,1323',
        status: 'Dective',
        State: 'Production',
        depth: "130000"
      }, {
        WellName: 'AH_26',
        WellCode: "pedec_ah_60",
        Compony: "Pedec",
        Geo: '3234,1323',
        status: 'Dective',
        State: 'Production',
        depth: "30000"
      },
      {
        WellName: 'AH_7',
        WellCode: "pedec_ah_70",
        Compony: "Pedec",
        Geo: '3234,1323',
        status: 'Dective',
        State: 'Production',
        depth: "30000"
      },
      {
        WellName: 'AH_80',
        WellCode: "pedec_ah_80",
        Compony: "Pedec",
        Geo: '3234,1323',
        status: 'Dective',
        State: 'Production',
        depth: "30000"
      },




      ])
    }
    if (clicked == 2) {


      setTitle1("اطلاعات مخزن")
      console.log("hello")
      setColDefs([
        { field: "FIELD_NAME" },
        { field: "X_COORDINATE" },
        { field: "Y_COORDINATE" },
        { field: "IS_ACTIVE" },
        { field: "ABBREVATION" },
      ])

      setRowData([{

        FIELD_NAME: "ar_30",
        X_COORDINATE: 330.20,
        Y_COORDINATE: 330.20,
        IS_ACTIVE: true,
        ABBREVATION: "Tesla",

      }

      ])
    }



  }
  const [open, setOpen] = useState(false);
  const [openWell, setOpenWell] = useState(false);
  const [openFeild, setOpenFeild] = useState(false);
  const [amenitiess, setAmenitiess] = useState([0, 1]);
  const [FielLath, setFielLath] = useState('')
  const [FieldLong, setFieldLong] = useState('')
  const [ABRVField, setABRVField] = useState('')
  const [FieldName, setFieldName] = useState('')
  const [Feild_IS_Active, setFeild_IS_Active] = useState(1)


  
  const [type, setType] = useState('Guesthouse');



  const [wellname, setWellname] = useState(' ')

  const [WellCode, setWellcode] = useState(' ')
  const [longitude, setLongitude] = useState(0)
  const [Latitude, setLatitude] = useState(0)


  const openDrawer = () => {
    console.log("Basemodels", Basemodels)
    console.log("type", parseInt(Basemodels))

    if (parseInt(Basemodels) === 1) {
      setOpenWell(true)
    }
    if (parseInt(Basemodels) === 2) {
      setOpenFeild(true)
    }

  }


  const From = () => {

    return (
      <>
        <CssVarsProvider >
          <Sheet
            sx={{
              borderRadius: 'md',
              p: 0.5,
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              height: '100%',
              overflow: 'auto',
              boxShadow: 6,

            }}
          >



            <DialogContent>

              <Grid container spacing={2} sx={{ flexGrow: 1 }} >
                <Grid size={6}>

                  <FormControl>
                    <FormLabel>نام چاه</FormLabel>

                    <FormHelperText>‌نام چاه را وارد کنید</FormHelperText>
                  </FormControl>

                </Grid>
                <Grid size={6}>

                  <FormControl>
                    <FormLabel>کد چاه</FormLabel>

                    <FormHelperText>کد چاه را وارد کنید</FormHelperText>
                  </FormControl>
                  <FormControl>

                  </FormControl>
                </Grid>
                <Grid size={6}>

                  <FormControl>
                    <FormLabel>نام مستعار</FormLabel>

                    <FormHelperText>نام مستعار چاه را وارد کنید</FormHelperText>
                  </FormControl>
                  <FormControl>

                  </FormControl>
                </Grid>
                <Grid size={6}>

                  <FormControl>
                    <FormLabel> تاریخ اولین عملیات</FormLabel>

                    <FormHelperText>اولین روزی که چاه ساخته شده است</FormHelperText>
                  </FormControl>
                  <FormControl>

                  </FormControl>
                </Grid>
                <Grid size={6}>

                  <FormControl>
                    <FormLabel>نام مسئول چاه</FormLabel>

                    <FormHelperText>نام مسپولی که چاه را تحویل گرفته ولرد کنید</FormHelperText>
                  </FormControl>
                  <FormControl>

                  </FormControl>
                </Grid>
                <Grid size={6}>

                  <FormControl>

                    <FormHelperText> تاریخ اولین تولید در وضعیت بهره برداری را وارد کنید</FormHelperText>
                  </FormControl>
                  <FormControl>

                  </FormControl>
                </Grid>
                <Grid size={12} >
                  <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 1 }}>
                    مختصات جغرافیایی
                  </Typography>






                </Grid>

                <Grid size={6} >
                  <FormLabel>وضعیت چاه</FormLabel>
                  {/* <SelectIndicator /> */}
                  <FormHelperText> وضعیت  چاه را دارد کنید </FormHelperText>
                </Grid>
                <Grid size={6} >
                  <FormLabel>نوع چاه</FormLabel>
                  <SelectType />
                  <FormHelperText> نوع  چاه را دارد کنید </FormHelperText>
                </Grid>
                <Grid size={12} >
                  <FormLabel>آدرس چاه</FormLabel>

                  <FormHelperText> ادرس  چاه را دارد کنید </FormHelperText>
                </Grid>

              </Grid>
            </DialogContent>

            <Divider sx={{ mt: 'auto' }} />
            <Stack
              direction="row"
              useFlexGap
              spacing={1}
              sx={{ justifyContent: 'space-between' }}
            >

            </Stack>
          </Sheet>
        </CssVarsProvider >

      </>
    )
  }

  const FieldForm = () => {

    return (
      <>
        <CssVarsProvider >

          <Sheet
            sx={{
              borderRadius: 'md',
              p: 0.5,
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              height: '90%',
              overflow: 'auto',
              boxShadow: 6,

            }}
          >



            <DialogContent>

              <Grid container spacing={2} sx={{ flexGrow: 1 }} >
                <Grid size={12}>

                  <FormControl>
                    <FormLabel>نام مخزن</FormLabel>
                    <Textarea ></Textarea>
                    <FormHelperText>‌نام مخرن را وارد کنید</FormHelperText>
                  </FormControl>

                </Grid>

                <Grid size={6}>

                  <FormControl>
                    <FormLabel>نام اختصار</FormLabel>
                    <Textarea name="Soft" placeholder="نام اختصار" variant="soft" />
                    <FormHelperText>نام اختصاری مخزن را وارد کنید</FormHelperText>
                  </FormControl>
                  <FormControl>

                  </FormControl>
                </Grid>


                <Grid size={12} container>
                  <Grid size={12} >
                    <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 1 }}>
                      مختصات جغرافیایی
                    </Typography>

                  </Grid>
                  <Grid size={6} >
                    <FormControl >

                      <FormLabel>طول جغرافیایی</FormLabel>
                      <Textarea name="Soft" placeholder="طول جغرافیا" variant="soft" />
                      <FormHelperText> طول جغرافیایی چاه را .ارد کنید </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid size={6} >
                    <FormControl  >

                      <FormLabel>عرض جغرافیایی</FormLabel>
                      <Textarea name="Soft" placeholder="عرض جغرافیا" variant="soft" />
                      <FormHelperText> عرض جغرافیایی چاه را .ارد کنید </FormHelperText>
                    </FormControl>
                  </Grid>

                </Grid>

                <Grid size={6} >
                  <FormLabel>وضعیت چاه</FormLabel>
                  {/* <SelectIndicator /> */}
                  <FormHelperText> وضعیت  چاه را دارد کنید </FormHelperText>
                </Grid>
                <Grid size={6} >
                  <FormLabel>نوع چاه</FormLabel>
                  <SelectType />
                  <FormHelperText> نوع  چاه را دارد کنید </FormHelperText>
                </Grid>


              </Grid>
            </DialogContent>



          </Sheet>
        </CssVarsProvider >

      </>
    )
  }
  return (

    <>

      <Grid container >
        <Grid item size={12} >

          <Box
            sx={{
              width: "auto",
              boxShadow: 10,
              borderRadius: 2,
              p: 2,


            }}
          >
            <CssVarsProvider>
              <Stack
                direction="row"

                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h1">
                  نمای master
                </Typography>



                <SelectType
                  state={SetBasemodels}

                />
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    justifyContent: "left",
                    alignItems: "center",
                  }}
                >
                  <Button onClick={openDrawer}>ایجاد</Button>


                  <Button disabled size="md" color="danger">
                    حذف
                  </Button>
                </Stack>

              </Stack>

            </CssVarsProvider>
            <Divider>{Title1}</Divider>

            <div style={{ height: 270 }}>
              <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                gridOptions={gridOptions}
                onRowClicked={Rowselected}
              />
            </div>
          </Box>
        </Grid>



        <Grid size={12} paddingTop={2}>

          <Box
            sx={{

              width: "auto",
              border: "GrayText",
              boxShadow: 7,
              borderRadius: 2,
              p: 2,

            }}
          >

            <Typography variant="h6" gutterBottom>
              جزییات
            </Typography>

            <Divider></Divider>
            <div style={{ height: 300 }}>
              <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}

                theme={myTheme}
              />
            </div>

          </Box>

        </Grid>



        <Grid size={12} paddingTop={2}>

          <div style={{ height: 300 }} >
            <AgGridReact
              rowData={rowData1}
              columnDefs={columnDefs1}
              defaultColDef={defaultColDef1}
              getRowId={getRowId}

              onGridReady={onGridReady}
              onCellEditRequest={onCellEditRequest}
              onRowClicked={Rowselected}
              Rowselected={true}
              enableRtl={true}
              onRowSelected={true}
              gridOptions={gridOptions}
            />
          </div>



        </Grid>
      </Grid >




      <CssVarsProvider>
        <Drawer
          anchor="right"

          variant="plain"
          open={openWell}
          onClose={() => setOpenWell(false)}
          slotProps={{
            content: {
              sx: {
                direction: 'revert',
                bgcolor: 'transparent',
                p: { md: 1, sm: 1 },
                boxShadow: 'none',
                width: '40%'
              },
            },
          }}
        >

          <Sheet
            sx={{
              borderRadius: 'md',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              height: '100%',
              overflow: 'auto',
            }}


          >
            <DialogTitle>خصوصیات چاه ها</DialogTitle>
            <ModalClose />
            <Divider sx={{ mt: 'auto' }} />
            <DialogContent sx={{ gap: 2 }}></DialogContent>
            <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 1 }}>
              اطلاعات پایه
            </Typography>

            <div role="group" aria-labelledby="rank">
              <List
                orientation="horizontal"
                size="sm"
                sx={{ '--List-gap': '12px', '--ListItem-radius': '20px' }}
              >
                {['ساحلی', 'غیر ساحلی'].map((item, index) => {
                  const selected = amenitiess.includes(index);
                  return (
                    <ListItem key={item}>
                      <AspectRatio
                        variant={selected ? 'solid' : 'outlined'}
                        color={selected ? 'primary' : 'neutral'}
                        ratio={1}
                        sx={{ width: 20, borderRadius: 20, ml: -0.5, mr: 0.75 }}
                      >
                        <div>{selected && <Done fontSize="md" />}</div>
                      </AspectRatio>
                      <Checkbox
                        size="sm"
                        color="neutral"
                        disableIcon
                        overlay
                        label={item}
                        variant="outlined"
                        checked={selected}
                        onChange={(event) =>
                          setAmenitiess((prev) => {
                            const set = new Set([...prev, index]);
                            if (!event.target.checked) {
                              set.delete(index);
                            }

                            return [...set];
                          })
                        }
                        slotProps={{
                          action: {
                            sx: {
                              '&:hover': {
                                bgcolor: 'transparent',
                              },
                            },
                          },
                        }}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </div>
            {/* <From /> */}
            <Stack
              direction="row"
              useFlexGap
              spacing={1}
              sx={{ justifyContent: 'space-between' }}
            > </Stack>
          </Sheet>
        </Drawer>


        <Drawer
          anchor="right"
          size="md"
          variant="plain"
          open={openFeild}
          onClose={() => setOpenFeild(false)}
          slotProps={{
            content: {
              sx: {
                direction: 'revert',
                bgcolor: 'transparent',
                p: { md: 3, sm: 0 },
                boxShadow: 'none',
              },
            },
          }}
        >
          <Sheet
            sx={{
              borderRadius: 'md',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              height: '100%',
              overflow: 'auto',
            }}
          >
            <DialogTitle>خصوصیت مخزن</DialogTitle>
            <ModalClose />
            <Divider sx={{ mt: 'auto' }} />
            <DialogContent sx={{ gap: 2 }}>


              <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 1 }}>
                اطلاعات مخزن
              </Typography>
              <FormControl>
                <FormLabel>نام مخزن</FormLabel>
                <Textarea
                  onChange={(e) => {
                    setFieldName(e.target.value);
                  }}
                placeholder='نام مخزن را وارد کنید' ></Textarea>
                
                <FormHelperText>‌نام مخرن را وارد کنید</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>نام اختصار</FormLabel>
                <Textarea  value={ABRVField} placeholder="نام اختصار" onChange={(e) => {setABRVField(e.target.value)}} />
                <FormHelperText>نام اختصاری مخزن را وارد کنید</FormHelperText>
              </FormControl>
 
              <FormControl >

                <FormLabel>طول جغرافیایی</FormLabel>
                <Textarea name="Soft" placeholder="طول جغرافیا" variant="soft"  
                onChange={(e) => {
                    setFieldLong(e.target.value);
                  }} />
                <FormHelperText> طول جغرافیایی چاه را .ارد کنید </FormHelperText>
              </FormControl>
              <FormControl >

                <FormLabel>عرض جغرافیایی</FormLabel>
                <Textarea value={FielLath} FieldLong name="Soft" placeholder="طول جغرافیا" variant="soft" required 
                 onChange={(e) => {
                    setFielLath(e.target.value);
                  }}/>
                <FormHelperText> عرض جغرافیایی چاه را .ارد کنید </FormHelperText>
              </FormControl>


              <FormControl orientation="horizontal">
                <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
                  <FormLabel sx={{ typography: 'title-sm' }}>
                    نوع مخزن
                  </FormLabel>
                  <FormHelperText sx={{ typography: 'body-sm' }}>

                    <SelectFieldType />
                  </FormHelperText>
                </Box>

              </FormControl>


            </DialogContent>


            <FormControl>
              <FormLabel>وضعیت مخزن</FormLabel>
              <RadioGroup orientation="horizontal" defaultValue="outlined" name="radio-buttons-group">
                <Radio value="1" label="فعال" variant="outlined" />
                <Radio value="2" label="غیر فعال" variant="soft" />

              </RadioGroup>
            </FormControl>
            <Divider sx={{ mt: 'auto' }} />
            <Stack
              direction="row"
              useFlexGap
              spacing={1}
              sx={{ justifyContent: 'space-between' }}
            >
              <Button
                variant="outlined"
                color="neutral"

              >
                پاک کردن
              </Button>
              <Button onClick={() => setOpen(false)}>ذخیره</Button>
            </Stack>
          </Sheet>
        </Drawer>
      </CssVarsProvider>
    </>
  )
}

export function SelectType(props) {
  return (
    <CssVarsProvider >
      <Select
        onChange={(e, mewvalue) => props.state(mewvalue)}

        placeholder="موجودیت را انتخاب کنید"
        indicator={<KeyboardArrowDown />}
        sx={{
          width: "60%",
          [`& .${selectClasses.indicator}`]: {
            transition: '0.2s',
            [`&.${selectClasses.expanded}`]: {
              transform: 'rotate(-180deg)',
            },
          },
        }}
      >
        <Option value="1">Well</Option>
        <Option value="2">Field</Option>
        <Option value="3">Zone</Option>
        <Option value="4">Resevior</Option>
        <Option value="5">Wellbore</Option>
        <Option value="6">Well Tubular</Option>
        <Option value="7">Organization unit</Option>
        <Option value="8">Facilities</Option>
        <Option value="9">Production</Option>

      </Select>
    </CssVarsProvider >
  );

}


export function SelectFieldType(props) {
  return (
    <CssVarsProvider >
      <Select
        onChange={(e, mewvalue) => props.state(mewvalue)}

        placeholder="نوع مخزن را انتخاب کنید"
        indicator={<KeyboardArrowDown />}
        sx={{
          width: "100%",
          [`& .${selectClasses.indicator}`]: {
            transition: '0.2s',
            [`&.${selectClasses.expanded}`]: {
              transform: 'rotate(-180deg)',
            },
          },
        }}
      >
        <Option value="1">نفتی</Option>
        <Option value="2">گازی</Option>


      </Select>
    </CssVarsProvider >
  );

}
