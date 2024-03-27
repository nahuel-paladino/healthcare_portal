import { Outlet } from 'react-router-dom';

import Drawer from "@mui/material/Drawer"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function Home() {

    const drawerWidth = 250;

    return (
        <div id="homepage">
            <Drawer
                variant="permanent"
                sx={{
                    [`& .MuiDrawer-paper`]: {
                        position: "relative",
                        width: drawerWidth,
                    },
                }}
            >
                <List
                    sx={{ padding: "1rem" }}
                >
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                sx={{ borderRadius: 5 }}
                            >
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <p>Home page</p>
            {/* <Outlet /> */}
        </div>
    )
}