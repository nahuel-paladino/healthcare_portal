import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export default function RecordTable({ headers, rows }) {

    const createHeaders = () => {
        return (
            <thead>
                <tr>
                    {headers.map((header) =>
                        <th key={header}>{header}</th>
                    )}
                </tr>
            </thead>
        )
    }

    const createBody = () => {
        return (
            <tbody>
                {rows.map((row) =>
                    <tr key={row}>
                        {row.map((cell, index) =>
                            <td key={index}>{cell}</td>
                        )}
                    </tr>
                )}
            </tbody>
        )
    }

    return (
        <div className="record-table">
            <div className="interact-bar">
                <TextField
                    label="Search Records"
                    variant="outlined"
                />
                <Button variant="contained">Notification Setup</Button>
                <Button variant="contained">Print</Button>
            </div>
            <table>
                {createHeaders()}
                {createBody()}
            </table>
        </div>
    )
}