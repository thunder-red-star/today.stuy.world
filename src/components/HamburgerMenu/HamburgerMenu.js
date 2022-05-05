// Hamburger menu component
// On click, it toggles the state of the menu, and opens or closes it
// A hamburger menu contains a Sidebar, which is a container for the menu items

import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './HamburgerMenu.css';
import $ from 'jquery';


// Don't forget to load in the HamburgerMenu.css file

export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    return (
      <div className="hamburger-menu">
        <div className="hamburger-menu-toggle" onClick={this.toggleMenu}>
          <div className="hamburger-menu-toggle-line toggle-line-1" />
          <div className="hamburger-menu-toggle-line toggle-line-2" />
          <div className="hamburger-menu-toggle-line toggle-line-3" />
        </div>
        <Sidebar isOpen={isOpen}>{children}</Sidebar>
        <script>
          $(function () {
          $('.hamburger-menu-toggle, div').click(function () {
            $('.navbar-toggle').toggleClass('navbar-on');
            $('.sidebar, div').fadeToggle();
            $('.sidebar').removeClass('nav-hide');
          })});
        </script>
      </div>
    );
  }
}