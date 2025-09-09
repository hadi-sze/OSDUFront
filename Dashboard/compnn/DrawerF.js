import * as React from 'react';
import { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import TuneIcon from '@mui/icons-material/TuneRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import Done from '@mui/icons-material/Done';
import Input from '@mui/joy/Input';

import Textarea from '@mui/joy/Textarea';
import FormControlLabel from '@mui/material/FormControlLabel';





export default function DrawerF() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('Guesthouse');

  const [amenities, setAmenities] = useState([0, 1]);

  const [wellname, setWellname] = useState(' ')
  const [wellvalume, setWellvalume] = useState(0)


  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<TuneIcon />}
        onClick={() => setOpen(true)}
      >
        تست باز شود
      </Button>
      <Drawer
        anchor="right"
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
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
          <DialogTitle>خصوصیات چاه ها</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>

            <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 1 }}>
              محل احداث مخزن
            </Typography>

            <div role="group" aria-labelledby="rank">
              <List
                orientation="horizontal"
                size="sm"
                sx={{ '--List-gap': '12px', '--ListItem-radius': '20px' }}
              >
                {['ساحلی', 'غیر ساحلی'].map((item, index) => {
                  const selected = amenities.includes(index);
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
                          setAmenities((prev) => {
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



            <FormControl>
              <FormLabel>نام چاه</FormLabel>
              <Textarea value={wellname} onChange={(event) => {
                setWellname(event.target.value);
              }} placeholder="عناون چاه" minRows={1} />
              <FormHelperText>‌نام چاه را وارد کنید</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>حجم نفت خروجی</FormLabel>
              <Textarea value={wellvalume} onChange={(event) => {
                setWellvalume(event.target.value);
              }} placeholder="حجم" minRows={1} />
              <FormHelperText>مقدار حجمی که چاه تولید میکند را را وارد کنید </FormHelperText>
            </FormControl>

          </DialogContent>

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
              onClick={() => {
                setType('');
                setWellname('');
                setAmenities([]);
                setWellvalume(0);
              }}
            >
              پاک کردن فرم
            </Button>
            <Button onClick={() => {
            setOpen(false);
            setWellname('');
            setAmenities([]);
                setWellvalume(0);
            }}>بستن</Button>
        </Stack>
      </Sheet>
    </Drawer>
    </React.Fragment >
  );
}