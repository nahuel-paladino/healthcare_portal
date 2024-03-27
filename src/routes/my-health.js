import NotificationBanner from "../components/notif-banner";
import PatientCard from "../components/patient-card";
import ProviderCard from "../components/provider-card";

export default function MyHealth() {
    return (
        <div id="my-health" className="page-content">
            <NotificationBanner title="My Health" />
            <div id="my-health-cards">
                <PatientCard />
                <ProviderCard />
            </div>
        </div>
    )
}