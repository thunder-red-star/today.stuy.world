// Landing page for the application
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarLink from '../../components/Sidebar/SidebarLink';

import Bells from '../../features/Bells/Bells';
import Announcements from '../../features/Announcements/Announcements';
import Links from '../../features/Links/Links';
import Credits from '../../features/Credits/Credits';
import Settings from '../../features/Settings/Settings';
// Site specifications:
// * There is a hamburger menu that opens the sidebar
// * In the sidebar, you can click different links to display different views

export default class Home extends React.Component {
    render() {
        return (
            <HamburgerMenu>
                <Sidebar>
                    <SidebarLink to="/home/bells">Bells</SidebarLink>
                    <SidebarLink to="/home/announcements">Announcements</SidebarLink>
                    <SidebarLink to="/home/links">Links</SidebarLink>
                    <SidebarLink to="/home/credits">Credits</SidebarLink>
                    <SidebarLink to="/home/settings">Settings</SidebarLink>
                </Sidebar>
                <div>
                    <Routes>
                        <Route path="/bells" component={Bells} />
                        <Route path="/announcements" component={Announcements} />
                        <Route path="/links" component={Links} />
                        <Route path="/credits" component={Credits} />
                        <Route path="/settings" component={Settings} />
                    </Routes>
                </div>
            </HamburgerMenu>
        );
    }
}