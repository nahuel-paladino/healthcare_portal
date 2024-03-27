import NotificationBanner from "../components/notif-banner"
import QuickTiles from "../components/quick-tiles";

export default function Dashboard() {
    return (
        <div id="dashboard" className="page-content">
            <NotificationBanner title="Quick Access Dashboard" />
            <QuickTiles />
        </div>
    )
}