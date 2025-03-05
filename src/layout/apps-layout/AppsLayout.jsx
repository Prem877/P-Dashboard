'use client'

import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import TopNav from '../top-nav/TopNav';

export default function AppsLayout({ children }) {
    const [showMenu, setShowMenu] = useState(true);
    const ToggleMenu = () => {
        return setShowMenu(!showMenu);
    };

    return (
        <div id="db-wrapper" className={`${showMenu ? '' : 'toggled'}`}>
            <div className="navbar-vertical navbar">
                <Sidebar
                    showMenu={showMenu}
                    onClick={(value) => setShowMenu(value)}
                />
            </div>
            <div id="page-content">
                <div className="header">
                    <TopNav
                        data={{
                            showMenu: showMenu,
                            SidebarToggleMenu: ToggleMenu
                        }}
                    />
                </div>
                {children}
            </div>
        </div>
    )
}
