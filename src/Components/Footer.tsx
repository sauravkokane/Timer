import React from 'react';
import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Item from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Contact from './Contact.tsx';

const Footer = () => {
    return (

        <div className='footer'>

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Item><Avatar alt='SK' src='../Static/images/saurav_kokane.jpg' /></Item>
                <Item>Saurav Kokane</Item>
                <Item><Contact /></Item>
            </Stack>
        </div>
    )
}

export default Footer;
