// Navigation component
import React from 'react';
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
        <HamburgerMenu>
            <Link to="/home">Home</Link>
            <Link to="/bells">Bells</Link>
            <Link to="/announcements">About</Link>
            <Link to="/links">Contact</Link>
            <Link to="/credits">Login</Link>
            <Link to="/settings">Settings</Link>
        </HamburgerMenu>
    );
  }
}
