import * as React from 'react';
import { Button, FormLabel, Stack, Typography } from '@mui/joy';
import { themeQuartz } from 'ag-grid-community';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import InfoIcon from '@mui/icons-material/Info';
import { useState, useCallback } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
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
import Divider from '@mui/joy/Divider';
import DatePicker from "react-multi-date-picker"
import Sheet from '@mui/joy/Sheet';
import axios from 'axios';
import { useEffect } from 'react';

import toast, { Toaster } from 'react-hot-toast';
var API_ADDRESS = "http://127.0.0.1:8000/";
const ORG_UNIT_CATEGORY = () => {




    const [rowDatatest, setRowDatatest] = useState();
    const [RowSelectedD, SetRowSelected] = useState({})
    const [FieldTypeName, SetFieldTypeName] = useState('')

    const [Abbreviation, Setabbreviation] = useState('')
    const [ColorCode, SetColorCode] = useState('')
    const [Expiration, SetExpiration] = useState(new Date())
    const [EFFECTIVE_DATE, SetEFFECTIVE_DATE] = useState(new Date())
    const [IS_ACTIVE, SetIsActive] = useState(true)
    const [DeleteID, SetDeleteID] = useState()

    var DelID = 0;
    const Create = () => {
        var APINAME = "osdu/api/AddFIELDTYPE"

        axios.post(API_ADDRESS + APINAME, {
            FieldTypeName: FieldTypeName,
            EFFECTIVE_DATE: EFFECTIVE_DATE,
            Expiration: Expiration,
            ABRVField: Abbreviation,
            ColorCode: ColorCode,
            IS_ACTIVE: IS_ACTIVE,
            currentuseer: 'Admin',
        })
            .then(function (response) {
                // console.log(response);
                // alert(response.status)
                if (response.status === 200) {

                    setOpen(false)
                    toast.success('اطلاعات ذخیره شد')
                } else {

                    toast.error("اطلاعات اشتباه است")
                }
            })
            .catch(function (error) {

                console.log(error);
                toast.success(" اطلاعات درج شد.")
                setOpen(false)
            })

    }

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
    useEffect(() => {
        console.log(DeleteID)


        console.log("DeleteID", DeleteID);
    }, [])


    useEffect(() => {
        console.log(DeleteID);
        SetDeleteID(DeleteID) // returns 0;
    },);
    const handleDelete = () => {
        var APINAME = "osdu/api/DeleteFieldType"
        console.log("DeleteID", DeleteID)

        console.log("delId", DelID);
        if (DeleteID != null) {

            axios.delete(API_ADDRESS + APINAME, {
                headers: {
                    Authorization: true
                },
                data: {
                    R_FIELD_TYPE_ID: DeleteID,
                }

            }).then(function (response) {
                // console.log(response);
                // alert(response.status)
                if (response.status === 200) {
                    toast.success('رکورد حذف شد')
                } else {

                    toast.error("اطلاعات اشتباه است")
                }
            })
                .catch(function (error) {

                    console.log(error);
                    toast.error("  ارتباط با سرور قطع شده است")
                })
        }
        if (DeleteID == undefined || DeleteID == null) {
            toast.error("please select on row !!")

        }
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
        { field: "AVVRIVATION", headerName: "AVVRIVATION", sortable: true, filter: true },
        { field: "COLOR_CODE", headerName: "COLOR CODE", sortable: true, filter: true },
        { field: "EFFECTIVE_DATE", headerName: "EFFECTIVE DATE" },
        { field: "EXPIRED_DATE", headerName: "EXPIRED DATE" },
        { field: "FILED_TYPE_NAME", headerName: "COLOR CODE" },
        { field: "IS_ACTIVE", headerName: "is Acive ", sortable: true, filter: true },
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
        // SetRowSelected(e.selectedNodes[0].data);
        // console.log("SetRowSelected", RowSelectedD)
        const id = e.selectedNodes[0].data['R_FIELD_TYPE_ID']
        SetDeleteID(id + 1)
        console.log("deleee,", DeleteID)
        SetFieldTypeName(e.selectedNodes[0].data['FILED_TYPE_NAME'])
        Setabbreviation(e.selectedNodes[0].data['AVVRIVATION'])
        SetColorCode(e.selectedNodes[0].data['COLOR_CODE'])
        SetEFFECTIVE_DATE(e.selectedNodes[0].data['EFFECTIVE_DATE'])
        SetExpiration(e.selectedNodes[0].data['EXPIRED_DATE'])
        SetIsActive(e.selectedNodes[0].data['IS_ACTIVE'])


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



    useEffect(() => {
        onGridReady()
    }, [])
    return (
        <>
            <Toaster position="top-left" reverseOrder={true} />
            <CssVarsProvider>


                <Stack spacing={3} alignItems={"flex-start"}>
                    <Sheet

                        spacing={2}
                        component="li"
                        variant="outlined"
                        sx={{ borderRadius: 'sm', p: 2, listStyle: 'none', width: "100%", boxShadow: "3" }}
                    >
                        <Sheet
                            spacing={2}
                            component="li"
                            variant="soft"
                            color="success"

                            sx={{ borderRadius: 'sm', p: 2, listStyle: 'none', width: "100%" }}
                        >


                            <Typography startDecorator={<InfoIcon />} sx={{ mb: 2 }} > REFERENCE FIELD TYPE:
                                <Typography color="success" > A reference table identifying the type of field. For example regulatory or locally assigned. </Typography>
                            </Typography>
                        </Sheet>
                        <br></br>
                        <Button onClick={() => setOpen(true)}>New Feild</Button>

                        <div style={{ height: 300, width: "100%" }}>
                            <AgGridReact
                                rowData={rowData}
                                columnDefs={colDefs}
                                gridOptions={gridOptions}


                                onSelectionChanged={chRowselected}
                                theme={myTheme}
                            />
                        </div>
                    </Sheet>
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
                                    <DialogTitle> FIELDTYPE</DialogTitle>
                                    <DialogContent>
                                        Insert Deatils Information for Filed Type
                                    </DialogContent>


                                    <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 1 }}>
                                        Field Type :
                                    </Typography>
                                    <FormControl>
                                        <FormLabel>FIELD TYPE</FormLabel>
                                        <Textarea value={FieldTypeName}
                                            onChange={(e) => {
                                                SetFieldTypeName(e.target.value);
                                            }}
                                            placeholder='Please set FIELD TYPE ' ></Textarea>

                                        <FormHelperText> Please set FIELD TYPE</FormHelperText>

                                    </FormControl>
                                    <FormControl>
                                        <FormLabel> Color Code</FormLabel>
                                        <Textarea value={ColorCode}
                                            onChange={(e) => {
                                                SetColorCode(e.target.value);
                                            }}
                                            placeholder='Please insert Color Code'></Textarea>

                                        <FormHelperText> The color code is used to label the color</FormHelperText>

                                    </FormControl>
                                    <FormControl>
                                        <FormControl>
                                            <FormLabel> ABBREVIATION </FormLabel>
                                            <Textarea
                                                value={Abbreviation}
                                                onChange={(e) => {
                                                    Setabbreviation(e.target.value);
                                                }}
                                                placeholder='please insert ABBREVIATION ' ></Textarea>

                                            <FormHelperText> Abbreviation used for reference type or code </FormHelperText>

                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>EFFECTIVE_DATE </FormLabel>

                                            <DatePicker
                                                value={EFFECTIVE_DATE}
                                                format="HH:mm:ss MM/DD/YYYY "
                                            ></DatePicker>
                                            <FormHelperText>The date that the data in this row first came into effect</FormHelperText>

                                        </FormControl>

                                        <FormControl>
                                            <FormLabel> EXPIRY DATE</FormLabel>
                                            <DatePicker
                                                format="HH:mm:ss MM/DD/YYYY "
                                            ></DatePicker>

                                            <FormHelperText> The date that no longer active or in inActive </FormHelperText>

                                        </FormControl>
                                    </FormControl>
                                    <FormControl>

                                        <FormControl></FormControl>
                                        <FormLabel>Active </FormLabel>

                                        <Checkbox
                                            color="success"
                                            label="Active"
                                            required
                                            variant="soft"
                                        />

                                    </FormControl>




                                    <Divider sx={{ mt: 'auto' }} />
                                    {DeleteID}
                                    <Stack
                                        direction="row"
                                        useFlexGap
                                        spacing={1}
                                        sx={{ justifyContent: 'space-between' }}
                                    >
                                        <Button
                                            variant="outlined"
                                            color="neutral"
                                            onClick={() => {
                                                // setType('');
                                                // setAmenities([]);
                                            }}
                                        >
                                            Cleare
                                        </Button>
                                        <Button onClick={Create}>Save</Button>
                                    </Stack>


                                </ModalDialog>
                            </Modal>
                        )}
                    </Transition>
                </React.Fragment>
            </CssVarsProvider>
        </>


    )


}
export default ORG_UNIT_CATEGORY

