import * as React from 'react';
import { CssVarsProvider, extendTheme, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import { useState , useEffect } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';
import GoogleIcon from './GoogleIcon.js';
import RufousHummer from "./RufousHummer.jpg"
import back1 from "./back1.jpg";
// var FormElements = HTMLFormControlsCollection {
//   email: HTMLFormControlsCollection,
//   password: HTMLInputElement,
//   persistent: HTMLInputElement,
// }
// var SignInFormElement extends HTMLFormElement {
//   readonly elements: FormElements;
// }


 

function Changelingk()
{
    window.location.href = 'http://nioc.ir';
}

function ColorSchemeToggle(props) {
    const { onClick, ...other } = props;
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    return (
        <IconButton
            aria-label="toggle light/dark mode"
            size="sm"
            variant="outlined"
            disabled={!mounted}
            onClick={(event) => {
                setMode(mode === 'light' ? 'dark' : 'light');
                onClick?.(event);
            }}
            {...other}
        >
            {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
    );
}

const customTheme = extendTheme({ defaultColorScheme: 'dark' });

export default function SignInSide() {

const [username ,SetUserName]=useState('')
const [password , Setpassword] = useState('')

return (
        <CssVarsProvider theme={customTheme} disableTransitionOnChange>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    ':root': {
                        '--Form-maxWidth': '800px',
                        '--Transition-duration': '0.4s', // set to `none` to disable transition
                    },
                }}
            />
            <Box
                sx={(theme) => ({
                    width: { xs: '100%', md: '50vw' },
                    transition: 'width var(--Transition-duration)',
                    transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    backdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(255 255 255 / 0.2)',
                    [theme.getColorSchemeSelector('dark')]: {
                        backgroundColor: 'rgba(19 19 24 / 0.4)',
                    },
                })}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100dvh',
                        width: '100%',
                        px: 2,
                    }}
                >
                    <Box
                        component="header"
                        sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}
                    >
                        <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                            <IconButton variant="soft" color="primary" size="sm">
                                <NewReleasesRoundedIcon />
                            </IconButton>
                            <Typography level="title-lg">شرکت ملی نفت ایران </Typography>
                        </Box>
                        <ColorSchemeToggle />
                    </Box>
                    <Box
                        component="main"
                        sx={{
                            my: 'auto',
                            py: 2,
                            pb: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: 400,
                            maxWidth: '100%',
                            mx: 'auto',
                            borderRadius: 'sm',
                            '& form': {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            },
                            [`& .MuiFormLabel-asterisk`]: {
                                visibility: 'hidden',
                            },
                        }}
                    >
                        <Stack sx={{ gap: 4, mb: 2 }}>
                            <Stack sx={{ gap: 1 }}>
                                <Typography component="h1" level="h3">
                                    سامانه اطلاعات یکپارچه نفت
                                </Typography>
                                <Typography level="body-sm">
                                  مرکز مانیتورینگ شرکت نفت -  
                                    <Link href="#replace-with-a-link" level="title-sm">
                                      OSDU Platfrom  
                                    </Link>
                                </Typography>
                            </Stack>
                            
                        </Stack>
                        <Stack sx={{ gap: 4, mt: 2 }}>
                            <form

                            >
                                <FormControl required>
                                    <FormLabel>نام کاربری</FormLabel>
                                    <Input  type="text" name="username" placeholder='نام'/>
                                </FormControl>
                                <FormControl required>
                                    <FormLabel>رمز عبور</FormLabel>
                                    <Input type="password" name="password" placeholder='رمز' />
                                </FormControl>
                                <Stack sx={{ gap: 4, mt: 2 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Checkbox size="sm" label="من را به خاطر بسپار" name="persistent" />
                                        <Link level="title-sm" href="#replace-with-a-link">
                                            رمز ورود را فرلموش کرده اید ؟
                                        </Link>
                                    </Box>
                                    <Button type="submit" fullWidth>
                                        ورود
                                    </Button>
                                </Stack>
                            </form>
                        </Stack>
                        <Divider
                            sx={(theme) => ({
                                [theme.getColorSchemeSelector('light')]: {
                                    color: { xs: '#FFF', md: 'text.tertiary' },
                                },
                            })}
                        >
                            رمز یکبار مصرف
                        </Divider>
                        <Stack sx={{ gap: 4, mb: 2 }}>
                            <Stack sx={{ gap: 1 }}>
                             
                            </Stack>
                            <Button
                                variant="soft"
                                color="neutral"
                                fullWidth
                                startDecorator={<GoogleIcon />}
                            >
                                ورود با رمز یکار مصرف
                            </Button>
                        </Stack>


                    </Box>
                    <Box component="footer" sx={{ py: 3 }}>
                       
                        <Typography level="body-xs" sx={{ textAlign: 'center' }} > 
                             
                            © مرکز مانیتورینگ {new Date().getFullYear()}
                           
                        </Typography>
                        
                    </Box>
                </Box>
            </Box>
            <Box
                sx={(theme) => ({
                    height: '100%',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: { xs: 0, md: '50vw' },
                    transition:
                        'background-image var(--Transition-duration), left var(--Transition-duration) !important',
                    transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                    backgroundColor: 'background.level1',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage:
                        'url(' + back1 + ')',
                    [theme.getColorSchemeSelector('dark')]: {
                        backgroundImage:
                            'url(' + RufousHummer + ')',
                    },
                })}
            />
        </CssVarsProvider>
    );
}