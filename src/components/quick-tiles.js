import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import BiotechIcon from '@mui/icons-material/Biotech';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function QuickTiles() {

    const navigate = useNavigate();

    const tiles = [
        {
            title: "Hospitalizations",
            icon: <LocalHospitalIcon sx={{ fontSize: 80 }} />,
            path: "/healthcare_portal/records/hospitalizations"
        },
        {
            title: "Special Visits",
            icon: <LocalHospitalIcon sx={{ fontSize: 80 }} />,
            path: "/healthcare_portal/records/special-visits"
        },
        {
            title: "Immunizations",
            icon: <VaccinesIcon sx={{ fontSize: 80 }} />,
            path: "/healthcare_portal/records/immunizations"
        },
        {
            title: "Test Results",
            icon: <BiotechIcon sx={{ fontSize: 80 }} />,
            path: "/healthcare_portal/records/test-results"
        },
        {
            title: "Family Doctor",
            icon: <Diversity1Icon sx={{ fontSize: 80 }} />,
            path: "/healthcare_portal/my-health"
        },
        {
            title: "Patient Information",
            icon: <AccountBoxIcon sx={{ fontSize: 80 }} />,
            path: "/healthcare_portal/my-health"
        },
    ]

    return (
        <div id="quick-access-container">
            <Button id="edit-layout" variant="contained">Edit Layout</Button>
            <div id="quick-access-tiles">
                {tiles.map((tile) => (
                    <button
                        key={tile.title}
                        className="quick-tile"
                        onClick={() => navigate(tile.path)}
                    >
                        {tile.icon}
                        <h2>{tile.title}</h2>
                    </button>
                ))}
            </div>
        </div>
    )
}