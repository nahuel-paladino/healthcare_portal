import { Outlet } from 'react-router-dom';

import Sidebar from '../components/layout/sidebar';

export default function Home() {
    return (
        <div id="homepage">
            <Sidebar />
            <Outlet />
        </div>
    )
}