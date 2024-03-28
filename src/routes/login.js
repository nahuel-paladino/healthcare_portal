import { Form } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export default function Login() {

    return (
        <div id="login-container" >
            <h1>Login to UXI Health Portal</h1>
            <Form action="/healthcare_portal/home">
                <TextField
                    // type="email"
                    label="Email"
                    variant="outlined"
                    required />
                <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    required />
                <Button
                    type="submit"
                    variant="contained"
                >Submit</Button>
            </Form>
        </div>
    )

}