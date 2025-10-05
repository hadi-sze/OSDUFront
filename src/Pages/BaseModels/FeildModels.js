import * as React from 'react';
import { Button, FormLabel, Stack, Typography } from '@mui/joy';
import { themeQuartz } from 'ag-grid-community';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import {
  RowSelectionOptions,
  ClientSideRowModelModule, NumberEditorModule, extEditorModule, alidationModule,
} from "ag-grid-community";
import { useState, useCallback } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import { Box } from '@mui/material';
import FormGroup from '@mui/material';
import { Transition } from 'react-transition-group';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Textarea from '@mui/joy/Textarea';
import Checkbox from '@mui/joy/Checkbox';
import { IconButton } from '@mui/joy';
const FieldModels = () => {

  const [rowDatatest, setRowDatatest] = useState();
  const [RowSelectedD, SetRowSelected] = useState({})
  const [FieldTypeName, SetFieldTypeName] = useState('')

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

  function bdb() {
    return (<>
      <CssVarsProvider >
        <IconButton onClick={handleEdit}>
          <ModeEditTwoToneIcon />
        </IconButton>
        <IconButton >
          <DeleteForeverIcon onClick={handleDelete} />
        </IconButton>
      </CssVarsProvider>

    </>)
  }
  const handleEdit = () => {
    setOpen(true)

  }

  const handleDelete = () => {

  }
  const [rowData, setRowData] = useState([
    { نام: "اروند", کد: "ar_30", شماره: 64950, فعال: true, makee: "Tesla", مختصات: 330.20, عمق: 64950, },
    { نام: "az_20", کد: "F-ar_30", شماره: 33850, فعال: false, makee: "Tesla", مختصات: 430.200, عمق: 64950 },
    { نام: "ahvz_30", کد: "ar_30", شماره: 29600, فعال: false, makee: "Tesla", مختصات: 300.230000, عمق: 64950 },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "R_FIELD_TYPE_ID", headerName: "id", sortable: true, filter: true },
    { field: "DISPLAY_NAME" },
    { field: "LONG_NAME" },
    { field: "AVVRIVATION", headerName: "اختصار", sortable: true, filter: true },
    { field: "COLOR_CODE", headerName: "کد رنگ", sortable: true, filter: true },
    { field: "EFFECTIVE_DATE" },
    { field: "EXPIRED_DATE" },
    { field: "FILED_TYPE_NAME" },
    { field: "IS_ACTIVE", headerName: "وضعیت", sortable: true, filter: true },
    {
      headerName: "Actions",
      field: "button",
      cellRenderer: bdb,
    },

  ]);




  const [open, setOpen] = React.useState(false);
  const nodeRef = React.useRef(null);



  const chRowselected = (e) => {


    console.log("click", e.selectedNodes[0].data)
    SetRowSelected(e.selectedNodes[0].data);
    console.log("SetRowSelected", RowSelectedD)


  }



  const onGridReady = useCallback((params) => {


    fetch("http://127.0.0.1:8000/osdu/api/GetFIELDTYPE")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data", data)
        setRowData(data);
      }).catch(function (error) {

        console.log(error);
        //toast.error("  ارتباط با سرور قطع شده است")
      })

  }, []);



  React.useEffect(() => {
    onGridReady()
  }, [])
  return (
    <>

      <CssVarsProvider>
        <Stack spacing={3} alignItems={"flex-start"}>
          <Typography color="neutral" level='h3'> اطلاعات پایه برای مخزن</Typography>

          <Button onClick={() => setOpen(true)}>ایجاد</Button>

          <div style={{ height: 300, width: "100%" }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              gridOptions={gridOptions}
              onRowselected={chRowselected}

              theme={myTheme}
            />
          </div>

        </Stack>

        <React.Fragment>

          <Transition nodeRef={nodeRef} in={open} timeout={300}>
            {(state) => (
              <Modal
                ref={nodeRef}
                keepMounted
                open={!['exited', 'exiting'].includes(state)}
                onClose={() => setOpen(false)}
                slotProps={{
                  backdrop: {
                    sx: {
                      opacity: 0,
                      backdropFilter: 'none',
                      transition: `opacity 300ms, backdrop-filter 300ms`,
                      ...{
                        entering: { opacity: 1, backdropFilter: 'blur(1px)' },
                        entered: { opacity: 1, backdropFilter: 'blur(1px)' },
                      }[state],
                    },
                  },
                }}
                sx={[
                  state === 'exited'
                    ? { visibility: 'hidden' }
                    : { visibility: 'visible' },
                ]}
              >
                <ModalDialog
                  sx={{
                    opacity: 0,
                    transition: `opacity 300ms`,
                    ...{
                      entering: { opacity: 1 },
                      entered: { opacity: 1 },
                    }[state],
                  }}
                >
                  <DialogTitle>نوع مخزن</DialogTitle>
                  <DialogContent>
                    در لیست زیر اطلاعات مربرط به داد های پایه را درج نمایید
                  </DialogContent>


                  <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 1 }}>
                    اطلاعات مخزن
                  </Typography>
                  <FormControl>
                    <FormLabel>نوع</FormLabel>
                    <Textarea
                      onChange={(e) => {
                        SetFieldTypeName(e.target.value);
                      }}
                      placeholder='عنوان نوع مخزن را وارد کنید' ></Textarea>

                    <FormHelperText>عنوان نوع مخزن را وارد کنید'</FormHelperText>

                  </FormControl>
                  <FormControl>
                    <FormLabel> کد رنگ</FormLabel>
                    <Textarea
                      onChange={(e) => {
                        SetFieldTypeName(e.target.value);
                      }}
                      placeholder='عنوان نوع مخزن را وارد کنید' ></Textarea>

                    <FormHelperText>عنوان نوع مخزن را وارد کنید'</FormHelperText>

                  </FormControl>
                  <FormControl>
                    <FormLabel>  اختصار</FormLabel>
                    <Textarea
                      onChange={(e) => {
                        SetFieldTypeName(e.target.value);
                      }}
                      placeholder=' نام اختصاری' ></Textarea>

                    <FormHelperText> نام اخنصاری را ا وارد کنید</FormHelperText>

                  </FormControl>

                  <FormControl>
                         <FormLabel>تاریخ غیر فعال شدن</FormLabel>

                    <FormHelperText>  را ا وارد کنید</FormHelperText>

                  </FormControl>

                  <FormControl>
                       <FormControl>
                         <FormLabel>تاریخ  فعال سازی</FormLabel>

                    <FormHelperText>  را ا وارد کنید</FormHelperText>

                  </FormControl>

                  <FormControl></FormControl>
                    <FormLabel>وضعیت</FormLabel>

                    <Checkbox
                      color="success"
                      label="فعال"

                      variant="soft"
                    />

                  </FormControl>


                </ModalDialog>
              </Modal>
            )}
          </Transition>
        </React.Fragment>
      </CssVarsProvider>
    </>


  )
}
export default FieldModels;