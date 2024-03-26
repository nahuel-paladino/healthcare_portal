import { Outlet } from "react-router-dom"

import Header from "../components/header"
import Footer from "../components/footer"

export default function Root() {
    return (
        <>
            <Header />
            <div id="content">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}