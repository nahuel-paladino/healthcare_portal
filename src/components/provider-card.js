import InfoCard from "./layout/info-card"

export default function ProviderCard() {
    return (
        <InfoCard title="Provider Information">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>Dr. Taylor Smith</td>
                    </tr>
                    <tr>
                        <th>Clinic</th>
                        <td>Neighbourhood Clinic</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td>Calgary, AB</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>(403)123-4567</td>
                    </tr>
                    <tr>
                        <th>Fax</th>
                        <td>(403)098-7654</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>t.smith@clinic.com</td>
                    </tr>
                </tbody>
            </table>
        </InfoCard>
    )
}