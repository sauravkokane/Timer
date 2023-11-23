import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#282c34' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    paddingInline: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.mode === 'dark' ? '#f2f2f2' : '#282c34',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? '#f2f2f2' : '#282c34',
        color: theme.palette.mode === 'dark' ? '#282c34' : '#f2f2f2',
    },
    fontWeight: 'bold',
    fontSize: '30px',
}));
const NavigationBar = ({ setNavbarSelection }) => {
    return (
        <div className='nav-bar'>
            <Stack direction={"row"} spacing={8}>
                <Item onClick={() => setNavbarSelection('Timer')}>Timer</Item>
                <Item onClick={() => setNavbarSelection('Clock')}>Clock</Item>
            </Stack>
        </div>
    )
};


export default NavigationBar;