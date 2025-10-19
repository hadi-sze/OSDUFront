import * as React from 'react';
import Typography from '@mui/material/Typography';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';

import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';

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

import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { CssVarsProvider } from '@mui/joy/styles';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';

import GiteRoundedIcon from '@mui/icons-material/GiteRounded';
import Drawer from '@mui/joy/Drawer';
import Sheet from '@mui/joy/Sheet';
import axios from 'axios';
import Checkbox from '@mui/joy/Checkbox';
import Done from '@mui/icons-material/Done';
import FormHelperText from '@mui/joy/FormHelperText';
import ModalClose from '@mui/joy/ModalClose';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import AspectRatio from '@mui/joy/AspectRatio';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {
  RowSelectionOptions,
  ClientSideRowModelModule, NumberEditorModule, extEditorModule, alidationModule,
} from "ag-grid-community";

import { Grid } from '@mui/material';

import { useCallback, useMemo } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import toast, { Toaster } from 'react-hot-toast';

import Textarea from '@mui/joy/Textarea';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Divider, IconButton, RadioGroup, Radio } from '@mui/joy';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import { Outlet } from 'react-router';

var API_ADDRESS = "http://127.0.0.1:8000/";
ModuleRegistry.registerModules([AllCommunityModule]);


const gridOptions = {

  enableRtl: true,
  defaultColDef: {
    floatingFilter: true,
    flex: 1,
    minWidth: 10,
    maxWidth: 500,
    resizable: "True",

  },

  rowSelection: {
    mode: "singleRow",
    headerCheckbox: true,
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


export default function DashboardPage() {
  const [Basemodels, SetBasemodels] = useState(0)
  const [CoorType, SetCoorType] = useState(0)
  const [FieldType, SetFieldType] = useState(0)

  const [DelBtn, setDelBtn] = useState(false)
  const [EditBtn, setEditBtn] = useState(false)
  const [RowSelectedD, SetRowSelected] = useState({})
  const [RowSelect, SetRowSelect] = useState({})
  const [open, setOpen] = useState(false);
  const [openWell, setOpenWell] = useState(false);
  const [openFeild, setOpenFeild] = useState(false);
  const [amenitiess, setAmenitiess] = useState([0, 1]);
  const [FielLath, setFielLath] = useState('')
  const [FieldLong, setFieldLong] = useState('')
  const [ABRVField, setABRVField] = useState('')
  const [FieldName, setFieldName] = useState('')
  const [type, setType] = useState('Guesthouse');
  const [wellname, setWellname] = useState(' ')

  const [WellCode, setWellcode] = useState(' ')
  const [longitude, setLongitude] = useState(0)
  const [Latitude, setLatitude] = useState(0)
  const [Feild_IS_Active, setFeild_IS_Active] = useState(1)
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
  const [rowDatatest, setRowDatatest] = useState();

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

      function bb() {
        return (<>
          <CssVarsProvider >
            <IconButton  >
              <ModeEditTwoToneIcon />
            </IconButton>
            <IconButton >
              <DeleteForeverIcon />
            </IconButton>
          </CssVarsProvider>

        </>)
      }

      setTitle1("اطلاعات مخزن")
      console.log("hello")
      setColDefs([
        { headerName: "ID", field: "FIELD_ID" },
        { headerName: "Field", field: "FIELD_name", sortable: true, filter: true },
        { field: "CRS_NAME" },
        { field: "FIELD_ABBREVATION" },
        { field: "FIELD_TYPE_Name" },
        { field: "X_COORDINATE" },
        { field: "Y_COORDINATE" },
        
        { field: "IS_ACTIVE" },
        { field: "SOURCE_NAME" },
         {
          headerName: "Actions",
          field: "button",
          cellRenderer: bb,
        },

      ])
      fetch("http://localhost:8000/osdu/api/getfield")
        .then((resp) => resp.json())
        .then((data) => {
          console.log("data", data)
          setRowData(data);
        }).catch(function (error) {

          console.log(error);
          toast.error("  ارتباط با سرور قطع شده است")
        })


    }



  }

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


  const [Fieldtype, SetFieldtype] = useState([])


  useEffect(() => {
    console.log(Basemodels)

    ChechMaster(Basemodels)
  }, [Basemodels]);

  useEffect(() => {
    let endpit = "/osdu/api/GetFIELDTYPE"
    fetch(API_ADDRESS + endpit)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data", data)
        SetFieldtype(data);
      }).catch(function (error) {

        console.log(error);
        //toast.error("  ارتباط با سرور قطع شده است")
      })

  }, [])

  function SelectFieldType(props) {
    const listItems = Fieldtype.map(Fieldtyp =>
      <Option key={Fieldtyp.R_FIELD_TYPE_ID} value={Fieldtyp.FILED_TYPE_NAME}>{Fieldtyp.FILED_TYPE_NAME}</Option>

    );

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

          {listItems}
          <Option value="1">نفتی</Option>
          <Option value="2">گازی</Option>


        </Select>
      </CssVarsProvider >
    );

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
                  <Button onClick={openDrawer}>New</Button>


                  <Button size="md" color="danger">
                    delete
                  </Button>
                </Stack>

              </Stack>
              <br></br>
            </CssVarsProvider>
            <Divider> </Divider>

            <div style={{ height: 270 }}>
              <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                gridOptions={gridOptions}

                theme={myTheme}
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
            ‌
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
                <Textarea value={ABRVField} placeholder="نام اختصار" onChange={(e) => { setABRVField(e.target.value) }} />
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
                  }} />
                <FormHelperText> عرض جغرافیایی چاه را .ارد کنید </FormHelperText>
              </FormControl>


              <FormControl orientation="horizontal">
                <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
                  <FormLabel sx={{ typography: 'title-sm' }}>
                    نوع مخزن
                  </FormLabel>
                  <FormHelperText sx={{ typography: 'body-sm' }}>

                    <SelectFieldType state={SetFieldType} />
                  </FormHelperText>
                </Box>

              </FormControl>
              <FormControl orientation="horizontal">
                <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
                  <FormLabel sx={{ typography: 'title-sm' }}>
                    نوع مختصات
                  </FormLabel>
                  <FormHelperText sx={{ typography: 'body-sm' }}>

                    <SelectFieldCoor state={SetCoorType} />
                  </FormHelperText>
                </Box>

              </FormControl>

            </DialogContent>


            <FormControl>
              <FormLabel>وضعیت مخزن</FormLabel>
              <RadioGroup orientation="horizontal" defaultValue="outlined" name="radio-buttons-group">
                <Radio value="1" label="فعال" variant="outlined" onClick={(e) => setFeild_IS_Active(1)} />
                <Radio value="2" label="غیر فعال" variant="soft" onClick={(e) => setFeild_IS_Active(2)} />

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
              <Button >ذخیره</Button>
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



export function SelectFieldCoor(props) {
  return (
    <CssVarsProvider >
      <Select
        onChange={(e, mewvalue) => props.state(mewvalue)}

        placeholder="نوع مختصات را انتخاب کنید"
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
        <Option value="1">WGS 84</Option>
        <Option value="2">UTM</Option>


      </Select>
    </CssVarsProvider >
  );

}