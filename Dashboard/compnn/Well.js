import React, { useRef, useState } from "react";
import { Input, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import GetGrid1 from "../GetGrid1";
import { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';


const getdataurl = 'http://127.0.0.1:8000/osdu/well/get';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    boxShadow: '1',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];



const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const Well = () => {
    const [Welldata, setWelldata] = new useState([]);
    const [Welldata1, setWelldata1] = new useState({});
    const getdataFro = () => {
        fetch(getdataurl)
            .then(response => response.json())
            .then(data => {
                
                setWelldata(data);
                setWelldata1(data);
            })
            .catch(error => {
                console.error('Error during fetch operation:', error); // Handle any errors
            }

            )
    }
const convet = () => {

  
let obj = Object.fromArray(Welldata);
console.log(obj);
    
}
    useEffect(() => {
        console.log("Welldata1",Welldata1)
        console.log("Welldata",Welldata)
        convet()

    }, [Welldata,Welldata1])

    useEffect(() => {
        getdataFro();

    }, [1]);
    return (
        <>
            <Typography fontWeight={"bold"} color="gray"> اطلاعات چاه</Typography>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid minHeight={"100"} size={7}>
                        <Item>
                         <DataGrid rows={rows} columns={columns}></DataGrid>
                        </Item>
                    </Grid>
                    <Grid size={5}>
                        <Item>
                            <Input>
                            </Input>
                        </Item>
                    </Grid>

                </Grid>
            </Box>


            <Item>

            </Item>

        </>
    )
}
export default Well