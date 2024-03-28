import { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)

    const location = useLocation();
    const navigate = useNavigate();

    function handleAvatarClick(e) {
        setAnchorEl(e.currentTarget)
    }

    function handleNav(path) {
        navigate(path);
        setAnchorEl(null);
    }

    return (
        <div id="header">
            <h1>Healthcare Portal</h1>
            {location.pathname.endsWith("/login") ? null : (
                <>
                    <IconButton onClick={handleAvatarClick}>
                        <Avatar
                            sx={{ width: 80, height: 80 }}
                        >JD</Avatar>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                    >
                        <MenuItem
                            onClick={() => handleNav("/healthcare_portal/settings")}
                        >Settings</MenuItem>
                        <MenuItem
                            onClick={() => handleNav("/login")}
                        >Logout</MenuItem>
                    </Menu>
                </>
            )}
        </div >
    )
}