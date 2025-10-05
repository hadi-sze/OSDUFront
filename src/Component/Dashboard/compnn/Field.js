import React, { useRef, useState } from "react";
import { Input, Typography } from "@mui/material";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import GetGrid1 from "../GetGrid1";
import { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import toast from "react-hot-toast";
import InsightsTwoToneIcon from '@mui/icons-material/InsightsTwoTone';
import { Divider } from "@mui/joy";
import Button from '@mui/material/Button';

import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import { ThemeProvider } from '@mui/material/styles';
import CardInvertedColors from './Card';

import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Drawer from '@mui/joy/Drawer';
import Modal from '@mui/joy/Modal';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';

import Avatar from '@mui/joy/Avatar';

import ListItemContent from '@mui/joy/ListItemContent';

import AccordionSummary, {
    accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';

import Add from '@mui/icons-material/Add';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Checkbox from '@mui/joy/Checkbox';
import Textarea from '@mui/joy/Textarea';
import Done from '@mui/icons-material/Done';
import FormHelperText from '@mui/joy/FormHelperText';
import ModalClose from '@mui/joy/ModalClose';
import TuneIcon from '@mui/icons-material/TuneRounded';
import AspectRatio from '@mui/joy/AspectRatio';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import PushPinIcon from '@mui/icons-material/PushPin';

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




const Field = () => {
    const [open, setOpen] = useState(false);

    const [Welldata, setWelldata] = new useState([]);
    const [Welldata1, setWelldata1] = new useState({});

    const [type, setType] = useState('Guesthouse');

    const [amenitiess, setAmenitiess] = useState([0, 1]);

    const [wellname, setWellname] = useState(' ')
    const [wellvalume, setWellvalume] = useState(0)
    const [WellCode, setWellcode] = useState(' ')
    const [longitude, setLongitude] = useState(0)
    const [Latitude, setLatitude] = useState(0)


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
                                        <Textarea value={wellname} onChange={(event) => {
                                            setWellname(event.target.value);
                                        }} placeholder="عناون چاه" minRows={1} />
                                        <FormHelperText>‌نام چاه را وارد کنید</FormHelperText>
                                    </FormControl>

                                </Grid>
                                <Grid size={6}>

                                    <FormControl>
                                        <FormLabel>کد چاه</FormLabel>
                                        <Textarea size="sm" value={WellCode} onChange={(event) => {
                                            setWellcode(event.target.value);
                                        }} placeholder="عناون چاه" minRows={1} />
                                        <FormHelperText>کد چاه را وارد کنید</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                                <Grid size={6}>

                                    <FormControl>
                                        <FormLabel>نام مستعار</FormLabel>
                                        <Textarea placeholder="aliase name" minRows={1} />
                                        <FormHelperText>نام مستعار چاه را وارد کنید</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                                <Grid size={6}>

                                    <FormControl>
                                        <FormLabel> تاریخ اولین عملیات</FormLabel>
                                        <Textarea placeholder="aliase name" minRows={1} />
                                        <FormHelperText>اولین روزی که چاه ساخته شده است</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                                <Grid size={6}>

                                    <FormControl>
                                        <FormLabel>نام مسئول چاه</FormLabel>
                                        <Textarea placeholder="مسول چاه" minRows={1} />
                                        <FormHelperText>نام مسپولی که چاه را تحویل گرفته ولرد کنید</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                                <Grid size={6}>

                                    <FormControl>
                                        <FormLabel> تاریخ تولید</FormLabel>
                                        <Textarea minRows={1} />
                                        <FormHelperText> تاریخ اولین تولید در وضعیت بهره برداری را وارد کنید</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                                <Grid size={12} >
                                    <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 1 }}>
                                        مختصات جغرافیایی
                                    </Typography>
                                    <AccordionGroup
                                        variant="plain"
                                        transition="0.2s"
                                        sx={{

                                            maxWidth: '100%',
                                            borderRadius: 'md',
                                            [`& .${accordionDetailsClasses.expanded}`]:
                                            {
                                                paddingBlock: '1rem',
                                            },
                                            [`& .${accordionSummaryClasses.button}`]: {
                                                paddingBlock: '1rem',
                                            },
                                        }}
                                    >
                                        <Accordion>
                                            <AccordionSummary>
                                                <Avatar color="primary">
                                                    <PushPinIcon />
                                                </Avatar>
                                                <ListItemContent>

                                                    <Typography level="body-sm">
                                                        اطلاعات محل چاه را وارد کنید
                                                    </Typography>
                                                </ListItemContent>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Stack spacing={1}>
                                                    <FormControl >

                                                        <FormLabel>طول جغرافیایی</FormLabel>
                                                        <Textarea value={longitude} onChange={(event) => {
                                                            setLongitude(event.target.value);
                                                        }} placeholder=" طول جغرافیایی" minRows={1} />
                                                        <FormHelperText> طول جغرافیایی چاه را .ارد کنید </FormHelperText>
                                                    </FormControl>

                                                    <Divider></Divider>
                                                    <FormControl  >

                                                        <FormLabel>عرض جغرافیایی</FormLabel>
                                                        <Textarea value={Latitude} onChange={e => setLatitude(e.target.value)} placeholder=" عرض جغرافیایی" minRows={1} />
                                                        <FormHelperText> عرض جغرافیایی چاه را .ارد کنید </FormHelperText>
                                                    </FormControl>
                                                </Stack>
                                            </AccordionDetails>
                                        </Accordion>
                                    </AccordionGroup>
                                </Grid>

                                <Grid size={6} >
                                    <FormLabel>وضعیت چاه</FormLabel>
                                    <SelectIndicator />
                                    <FormHelperText> وضعیت  چاه را دارد کنید </FormHelperText>
                                </Grid>
                                <Grid size={6} >
                                    <FormLabel>نوع چاه</FormLabel>
                                    <SelectType />
                                    <FormHelperText> نوع  چاه را دارد کنید </FormHelperText>
                                </Grid>
                                <Grid size={12} >
                                    <FormLabel>آدرس چاه</FormLabel>
                                    <Textarea multiline placeholder=" آدرس " minRows={1} variant="soft" />
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


    const openmodal = () => {
        setOpen(true);

    }
    const convet = () => {


        let obj = Object.fromArray(Welldata);
        console.log(obj);

    }
    // useEffect(() => {
    //         console.log("Welldata1",Welldata1)
    //         console.log("Welldata",Welldata)
    //         convet()

    //     }, [Welldata,Welldata1])

    // useEffect(() => {
    //         getdataFro();

    //     }, [1]);
    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: '300px'
                }}
                spacing={2}
            ></Grid>
            <Typography fontWeight={"bold"} color="gray">   اطلاعات چاه ها</Typography>
            <Grid
                container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: '300px'

                }}

                spacing={3}
            >

                <Box sx={{
                    padding: 2,
                    width: "auto",
                    height: "auto",
                    borderRadius: 1,

                    '&:hover': {
                        bgcolor: '#147ab575',
                    },
                }}>
                    <InsightsTwoToneIcon />
                    <Typography size="bold" variant="body" > تعداد کل چاه</Typography>
                    <Typography size="bold" variant="h5" > 5300 عدد</Typography>

                </Box>
                <Divider orientation="vertical">

                </Divider>
                <Box sx={{
                    padding: 2,
                    width: "auto",
                    height: "auto",
                    borderRadius: 1,

                    '&:hover': {
                        bgcolor: '#38de0a75',
                    },
                }} >
                    <InsightsTwoToneIcon />
                    <Typography size="bold" variant="body" > سر جمع </Typography>
                    <Typography size="bold" variant="h5" > 5300 </Typography>

                </Box>
                <Divider orientation="vertical">

                </Divider>
                <Box sx={{
                    padding: 2,
                    width: "auto",
                    height: "auto",
                    borderRadius: 1,
                    bgcolor: '#c5d0dc75',
                    '&:hover': {
                        bgcolor: '#797b7c75',
                    },
                }}>
                    <InsightsTwoToneIcon />
                    <Typography size="bold" variant="body" > تعداد چاه های فعال </Typography>
                    <Typography size="bold" variant="h5" > 5100 عدد</Typography>

                </Box>

                <Divider orientation="vertical">

                </Divider>
                <Box sx={{
                    padding: 2,
                    width: "auto",
                    height: "auto",
                    borderRadius: 1,
                    bgcolor: '#ebe7e7a5',
                    '&:hover': {
                        borderColor: '#3a04ece9',
                        bgcolor: '#ffffffe9',
                        boxShadow: 30,
                    },
                }}>
                    <InsightsTwoToneIcon />
                    <Typography size="bold" variant="body" > تعداد چاه های غیر </Typography>
                    <Typography size="bold" variant="h5" > ۲۰۰ عدد</Typography>

                </Box>




            </Grid>
            <Divider sx={{ margin: 2 }}>

            </Divider>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" color="primary" onClick={openmodal}>  ایجاد</Button>
                <Button variant="contained" color="error"> حذف</Button>
                <Button variant="contained" color="success"> ویرایش</Button>
            </Box>
            {/* 
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
                    <Grid size={6} >
                        <Item>

                        </Item>
                    </Grid>
                    <Grid size={3}>
                        <Item>

                        </Item>
                    </Grid>
                    <Grid size={3}>
                        <Item>

                        </Item>
                    </Grid>
                    {/* <Grid size={5}>
                        <Item>
                            <Input>
                            </Input>
                        </Item>
                    </Grid> 

                </Grid>

            </Box> */}


            <br></br>
            <Box sx={{ flexGrow: 1, boxShadow: 7, textShadow: 1 }} >
                <Grid container spacing={1}>
                    <Grid minHeight={"100"} size={12}>
                        <Item>
                            {/* <DataGrid rows={rows} columns={columns}></DataGrid> */}
                        </Item>
                    </Grid>
                    {/* <Grid size={5}>
                        <Item>
                            <Input>
                            </Input>
                        </Item>
                    </Grid> */}

                </Grid>
            </Box>


            <Item>

            </Item>
            <Box>

                <Button
                    variant="outlined"
                    color="neutral"
                    startDecorator={<TuneIcon />}
                    onClick={() => setOpen(true)}
                >
                    تست باز شودv
                </Button>
                <CssVarsProvider>
                    <Drawer
                        anchor="right"

                        variant="plain"
                        open={open}
                        onClose={() => setOpen(false)}
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
                            <From />
                            <Stack
                                direction="row"
                                useFlexGap
                                spacing={1}
                                sx={{ justifyContent: 'space-between' }}
                            > </Stack>
                        </Sheet>
                    </Drawer>
                </CssVarsProvider>

            </Box>
        </React.Fragment >
    )





}
export default Field








export function SelectIndicator() {
    return (
        <Select
            placeholder="ت چاه را انتخاب کنید"
            indicator={<KeyboardArrowDown />}
            sx={{
                width: "Auto",
                [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                        transform: 'rotate(-180deg)',
                    },
                },
            }}
        >
            <Option value="1">Cased</Option>
            <Option value="2">Spudded</Option>
            <Option value="3">Lincased</Option>
            <Option value="4">Dry</Option>
            <Option value="5">abonded oil</Option>
            <Option value="6">gas</Option>
        </Select>
    );

}
export function SelectType() {
    return (
        <Select
            placeholder="نوع چاه را انتخاب کنید"
            indicator={<KeyboardArrowDown />}
            sx={{
                width: "Auto",
                [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                        transform: 'rotate(-180deg)',
                    },
                },
            }}
        >
            <Option value="1">Construction</Option>
            <Option value="2">Operation</Option>
            <Option value="3">Producting</Option>

        </Select>
    );

}

