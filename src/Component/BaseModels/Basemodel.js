import * as React from 'react';
import { Button, FormLabel, Stack, Typography } from '@mui/joy';

import { themeQuartz } from 'ag-grid-community';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import FieldModels from './FeildModels';
import { useState, useCallback } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
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
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import WellModels from './WellModels'
import { useEffect } from 'react';
const Basemodel = () => {

    const [BaseData, SetBaseData] = useState(0)

    const [sty,setsty] = useState()

    useEffect(()=>{
        if(BaseData == 1)
        {
    
           setsty(<WellModels />)
        }
         if(BaseData == 2)
        {
             setsty(<FieldModels />)
        }
    },[BaseData])
    return (<>
        <CssVarsProvider>
            <Stack spacing={1} alignItems={"flex-start"}>

                <Typography color="neutral" level='h3'>  Master Data :  </Typography>
                <Typography color="neutral" level='h4'>   Master data includes entities that are either static and/or rarely change over the life or the field.  </Typography>

                < SelectType state={SetBaseData}></SelectType>
                <Sheet

                    component="li"
                    variant="outlined"
                    sx={{ borderRadius: 'sm', p: 2, listStyle: 'none', width:"100%" }}
                >
                    {sty}
                </Sheet>
            </Stack>
        </CssVarsProvider>
    </>)
}
export default Basemodel

export function SelectType(props) {
    return (
        <CssVarsProvider >
            <Select
                onChange={(e, mewvalue) => props.state(mewvalue)}

                placeholder="Please Selected Base Data"
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
