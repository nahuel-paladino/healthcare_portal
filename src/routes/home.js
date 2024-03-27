import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Drawer from "@mui/material/Drawer"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Home() {

    const location = useLocation();
    const navigate = useNavigate();

    const drawerWidth = 250;

    return (
        <div id="homepage">
            {/* DASHBOARD */}
            <Drawer
                variant="permanent"
                sx={{
                    [`& .MuiDrawer-paper`]: {
                        position: "relative",
                        width: drawerWidth,
                    }
                }}
            >
                <List sx={{ padding: "1rem" }}>
                    {/* HOME */}
                    <ListItem sx={{ padding: 0 }}>
                        <ListItemButton
                            sx={{ borderRadius: 2 }}
                            selected={location.pathname.endsWith("home")}
                            onClick={() => navigate("/healthcare_portal/home")}
                        >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    {/* MY HEALTH */}
                    <ListItem sx={{ padding: 0 }}>
                        <ListItemButton
                            sx={{ borderRadius: 2 }}
                            selected={location.pathname.endsWith("my-health")}
                            onClick={() => navigate("/healthcare_portal/my-health")}
                        >
                            <ListItemIcon>
                                <HealthAndSafetyIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Health" />
                        </ListItemButton>
                    </ListItem>
                    {/* RECORDS */}
                    <ListItem sx={{ padding: 0 }}>
                        <ListItemButton
                            sx={{ borderRadius: 2 }}
                            selected={location.pathname.includes("records")}
                            onClick={() => navigate("/healthcare_portal/records")}
                        >
                            <ListItemIcon>
                                <MedicalInformationIcon />
                            </ListItemIcon>
                            <ListItemText primary="Records" />
                        </ListItemButton>
                    </ListItem>
                    {/* SETTINGS */}
                    <ListItem sx={{ padding: 0 }}>
                        <ListItemButton
                            sx={{ borderRadius: 2 }}
                            selected={location.pathname.endsWith("settings")}
                            onClick={() => navigate("/healthcare_portal/settings")}
                        >
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            {/* PAGE CONTENT */}
            <Outlet />
        </div>
    )
}