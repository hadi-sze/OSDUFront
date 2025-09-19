import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';

import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function BasicModalDialog() {
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <Button
                variant="outlined"
                color="neutral"
                startDecorator={<Add />}
                onClick={() => setOpen(true)}
            >
                ایجاد
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>درج چاه جدید</DialogTitle>
                    <DialogContent>اطلاعات مربوط به هر چاه را در ورودی ها زیر قرار دهید.</DialogContent>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            setOpen(false);
                        }}
                    >
                        <Stack   spacing={1} >
                            <FormControl>
                                <FormLabel>نام چاه</FormLabel>
                                <Input autoFocus required />
                                    <FormLabel>نام مستعار</FormLabel>
                                  <Input autoFocus required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>وضعیت چاه</FormLabel>

                                < SelectIndicator required />
                            </FormControl>
                            <FormControl>
                                <FormLabel> شرکت زیر نفع</FormLabel>
                                <Input required />

                            </FormControl>
                             <FormControl>
                                <FormLabel>نوع چاه</FormLabel>

                                < SelectType required />
                            </FormControl>
                            <FormControl>
                                <FormLabel> عرض جغرافیایی</FormLabel>
                                <Input required />
                                <FormLabel>طول جغرافیایی</FormLabel>
                                <Input required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>آدرس چاه</FormLabel>
                                <Input required />


                            </FormControl>
                         
                            <FormControl>
                                <FormLabel>آدرس چاه</FormLabel>
                                <Input required />

                            </FormControl>

                            <Button type="submit">ذخیره</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );


}

export function SelectIndicator() {
    return (
        <Select
            placeholder=".وضعیت چاه را انتخاب کنید"
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
