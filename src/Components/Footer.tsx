import React from 'react';
import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Item from '@mui/material/Stack';
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
                <Item><a className='author' href='https://www.linkedin.com/in/saurav-kokane-127a161b2/'><Avatar alt="SK" src="../Static/images/author_image.jpg" /></a></Item>
                <Item><a className='author' href="https://www.linkedin.com/in/saurav-kokane-127a161b2/">Saurav Kokane</a></Item>
                <Item><Contact /></Item>
            </Stack>
        </div>
    )
}

export default Footer;
