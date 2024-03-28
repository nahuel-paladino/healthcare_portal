import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export default function Settings() {
    return (
        <div id="settings" className="page-content">
            <div id="account-section" className="settings-section">
                <h2>Account</h2>
                <TextField
                    label="Email"
                    variant="outlined"
                    disabled
                    sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
                <TextField
                    label="Phone"
                    variant="outlined"
                    disabled
                    sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
                <TextField
                    label="Address"
                    variant="outlined"
                    disabled
                    sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
                <Button variant="contained" disabled>Save</Button>
            </div>
        </div>
    )
}