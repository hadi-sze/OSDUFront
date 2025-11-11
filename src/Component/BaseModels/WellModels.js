import * as React from 'react';
import { Button, Stack, Typography } from '@mui/joy';
import { themeQuartz } from 'ag-grid-community';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import {
  RowSelectionOptions,
  ClientSideRowModelModule, NumberEditorModule, extEditorModule, alidationModule,
} from "ag-grid-community";
import { useState, useCallback } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';



const WellModels = () => {

  const [rowDatatest, setRowDatatest] = useState();
  const [RowSelectedD, SetRowSelected] = useState({})

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





  const chRowselected = (e) => {


    console.log("click", e.selectedNodes[0].data)
    SetRowSelected(e.selectedNodes[0].data);
    console.log("SetRowSelected", RowSelectedD)


  }



  const onGridReady = useCallback((params) => {

    fetch("http://localhost:8000/osdu/api/getfield")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data", data)
        setRowDatatest(data);
      }).catch(function (error) {

        console.log(error);
        //toast.error("  ارتباط با سرور قطع شده است")
      })

  }, []);


  return (
    <>

      <CssVarsProvider>
        <Stack spacing={3} alignItems={"flex-start"}>
          <Typography color="neutral" level='h4'> Base Model : 
             <Typography color="rgba(97, 202, 70, 0.93)" level='h2' > Well </Typography>
          </Typography>
           

          <Button>New</Button>

          <div style={{ height: 300, width :"100%" }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              gridOptions={gridOptions}
              onRowselected={chRowselected}

              theme={myTheme}
            />
          </div>
        </Stack>

         <Stack spacing={3} alignItems={"flex-start"}>
          <Typography color="neutral" level='h3'> نوع چاه </Typography>
          <Button>ایجاد</Button>

          <div style={{ height: 300, width :"100%" }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              gridOptions={gridOptions}
              onRowselected={chRowselected}

              theme={myTheme}
            />
          </div>
        </Stack>
      </CssVarsProvider>
    </>


  )
}
export default WellModels;