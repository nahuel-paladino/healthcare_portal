import { Form } from "react-router-dom";

export default function Login() {

    return (
        <div>
            <h1>Login Here</h1>
            <div>
                <Form action="login">
                    <button type="submit">Submit</button>
                </Form>
            </div>
        </div>
    )

}