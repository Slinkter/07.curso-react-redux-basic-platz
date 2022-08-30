import React from "react";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="App">
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
