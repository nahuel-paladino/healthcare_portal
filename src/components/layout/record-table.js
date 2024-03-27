import { useEffect, useState } from "react";

import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export default function RecordTable({ headers, rows }) {

    const [search, setSearch] = useState("");
    const [rowData, setRowData] = useState(rows);

    function handleInput(e) {
        setSearch(e.target.value);
    }

    useEffect(() => {
        setRowData(rows.filter((row) => (
            row.some((cell) => cell.toLowerCase().includes(search.toLowerCase()))
        )))
    }, [search])

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

    const createBody = (rows) => {
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
                    id="search"
                    label="Search Records"
                    variant="outlined"
                    value={search}
                    onChange={handleInput}
                />
                <Button variant="contained">Notification Setup</Button>
                <Button variant="contained">Print</Button>
            </div>
            <table>
                {createHeaders()}
                {createBody(rowData)}
            </table>
        </div>
    )
}