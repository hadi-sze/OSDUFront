import React, { useRef, useState } from "react";
 

import Box from '@mui/material/Box';
 
import Grid from '@mui/material/Grid';
 
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
 
import Textarea from '@mui/joy/Textarea';
 
import FormHelperText from '@mui/joy/FormHelperText';
 
const From2 = ()=> {
    return(
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>


                <CssVarsProvider>
                    {/* must be used under CssVarsProvider */}
                    <CssBaseline />

                    <Tabs
                        aria-label="Vertical tabs"
                        orientation="vertical"
                        sx={{ minWidth: "Auto", height: "Auto" }}
                    >
                        <TabList>
                            <Tab> اطلاعات پایه</Tab>
                            <Tab>داده های زمانی</Tab>
                            <Tab>اطاعات تکمیلی</Tab>

                            <Tab>آدرس</Tab>

                        </TabList>
                        <TabPanel value={0}>
                            <b>اطلاعات پایه</b> چاه
                            <Grid container spacing={1}>
                                <Grid size={4}>

                                    <FormControl>
                                        <FormLabel>نام چاه</FormLabel>
                                        <Textarea value={wellname}  placeholder="عناون چاه" minRows={1} />
                                        <FormHelperText>‌نام چاه را وارد کنید</FormHelperText>
                                    </FormControl>

                                </Grid>
                                <Grid size={4}>

                                    <FormControl>
                                        <FormLabel>کد چاه</FormLabel>
                                        <Textarea  placeholder="عناون چاه" minRows={1} />
                                        <FormHelperText>کد چاه را وارد کنید</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                                <Grid size={4}>

                                    <FormControl>
                                        <FormLabel>نام مستعار</FormLabel>
                                        <Textarea placeholder="aliase name" minRows={1} />
                                        <FormHelperText>نام مستعار چاه را وارد کنید</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                                <Grid size={4}>

                                    <FormControl>
                                        <FormLabel> تاریخ اولین عملیات</FormLabel>
                                        <Textarea placeholder="aliase name" minRows={1} />
                                        <FormHelperText>اولین روزی که چاه ساخته شده است</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                                <Grid size={4}>

                                    <FormControl>
                                        <FormLabel>نام مسول چاه</FormLabel>
                                        <Textarea placeholder="مسول چاه" minRows={1} />
                                        <FormHelperText>نام مسپولی که چاه را تحویل گرفته ولرد کنید</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                                <Grid size={4}>

                                    <FormControl>
                                        <FormLabel> تاریخ تولید</FormLabel>
                                        <Textarea minRows={1} />
                                        <FormHelperText> تاریخ اولین تولید در وضعیت بهره برداری را وارد کنید</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                            </Grid>

                        </TabPanel>
                        <TabPanel value={1}>
                            <b>اطلاعات زمانی</b> چاه
                            <Grid container spacing={3}>
                                <Grid size={4}>

                                    <FormControl>
                                        <FormLabel> تاریخ اولین عملیات</FormLabel>
                                        <Textarea placeholder="aliase name" minRows={1} />
                                        <FormHelperText>اولین روزی که چاه ساخته شده است</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                                <Grid size={4}>

                                    <FormControl>
                                        <FormLabel>نام مسول چاه</FormLabel>
                                        <Textarea placeholder="مسول چاه" minRows={1} />
                                        <FormHelperText>نام مسپولی که چاه را تحویل گرفته ولرد کنید</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                                <Grid size={4}>

                                    <FormControl>
                                        <FormLabel> تاریخ تولید</FormLabel>
                                        <Textarea minRows={1} />
                                        <FormHelperText> تاریخ اولین تولید در وضعیت بهره برداری را وارد کنید</FormHelperText>
                                    </FormControl>
                                    <FormControl>

                                    </FormControl>
                                </Grid>
                            </Grid>

                        </TabPanel>
                        <TabPanel value={2}>
                            <b>اطلاعات تکمیلی</b> چاه
                        </TabPanel>
                        <TabPanel value={3}>
                            <Grid container spacing={2}>
                                <Grid size={12} >
                                    <FormLabel>آدرس چاه</FormLabel>
                                    <Textarea placeholder=" آدرس " minRows={1} />
                                    <FormHelperText> ادرس  چاه را دارد کنید </FormHelperText>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </Tabs>

                </CssVarsProvider>
            </Box>
)}
export default From2