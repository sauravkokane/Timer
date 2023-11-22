import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MailIcon from '@mui/icons-material/Mail';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

type Anchor = 'left';

const Contact = () => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['LinkedIn', 'GitHub', 'Email', 'Twitter', "Phone", "Add More"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {text === 'LinkedIn' ? <LinkedIn /> : text === 'GitHub' ? <GitHubIcon /> : text === 'Twitter' ? <TwitterIcon /> : text === "Email" ? <MailIcon /> : text === 'Phone' ? <AddIcCallIcon /> : <AddCircleOutlineIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'Contact'}>
                <Button onClick={toggleDrawer('left', true)}><ContactSupportOutlinedIcon /></Button>
                <Drawer
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export default Contact;
