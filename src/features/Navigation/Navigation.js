// Navigation component
import React from 'react';
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
        <HamburgerMenu>
            <ul>
                <li><Link key="home" to="/home">Home</Link></li>
                <li><Link key="bells" to="/bells">Bells</Link></li>
                <li><Link key="announcements" to="/announcements">Announcements</Link></li>
                <li><Link key="links" to="/links">Links</Link></li>
                <li><Link key="credits" to="/credits">Credits</Link></li>
                <li><Link key="settings" to="/settings">Settings</Link></li>
            </ul>
        </HamburgerMenu>
    );
  }
}
