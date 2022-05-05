// Landing page for the application
import React from 'react';

import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarLink from '../../components/Sidebar/SidebarLink';

// Site specifications:
// * There is a hamburger menu that opens the sidebar
// * In the sidebar, you can click different links to display different views

export default class Home extends React.Component {
    render() {
        return (
                <HamburgerMenu>
                    <Sidebar>
                        <SidebarLink to="/bells">Bells</SidebarLink>
                        <SidebarLink to="/announcements">Announcements</SidebarLink>
                        <SidebarLink to="/links">Links</SidebarLink>
                        <SidebarLink to="/credits">Credits</SidebarLink>
                        <SidebarLink to="/settings">Settings</SidebarLink>
                    </Sidebar>
                </HamburgerMenu>
        );
    }
}