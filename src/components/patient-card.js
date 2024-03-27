import InfoCard from "./layout/info-card"

export default function PatientCard() {
    return (
        <InfoCard title="Patient Information">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>Jane Doe</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>She/Her</td>
                    </tr>
                    <tr>
                        <th>Sex</th>
                        <td>Female</td>
                    </tr>
                    <tr>
                        <th>PHN</th>
                        <td>12345-6789</td>
                    </tr>
                    <tr>
                        <th>Date of Birth</th>
                        <td>01/01/19XX</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>123 Street Ave NE, A1B 2C3</td>
                    </tr>
                    <tr>
                        <th>Immigrant Status</th>
                        <td>Non-Immigrant</td>
                    </tr>
                    <tr>
                        <th>Place of Birth</th>
                        <td>Calgary, AB</td>
                    </tr>
                </tbody>
            </table>
        </InfoCard>
    )
}