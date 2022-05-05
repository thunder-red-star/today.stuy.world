// Navigation component
import React from 'react';
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
        <HamburgerMenu>
            <Link key="home" to="/home">Home</Link>
            <Link key="bells" to="/bells">Bells</Link>
            <Link key="announcements" to="/announcements">Announcements</Link>
            <Link key="links" to="/links">Contact</Link>
            <Link key="credits" to="/credits">Login</Link>
            <Link key="settings" to="/settings">Settings</Link>
        </HamburgerMenu>
    );
  }
}
