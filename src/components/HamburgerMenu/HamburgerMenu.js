// Hamburger menu, meant to contain a list of links <a>
import React from 'react';
import './HamburgerMenu.css';
// Navigation contains a UL of LI elements with links inside, so when page is rendered, convert the array of links to a list of links

export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  // On click, toggle the menu by toggling the 'navbar-on' class on the 'navbar-toggle' element and by fading the 'nav' element in and out, without using jQuery
    toggleMenu = () => {
      const navbarToggle = document.getElementById('navbar-toggle');
      const navbar = document.getElementById('nav');
      if (navbarToggle.classList.contains('navbar-on')) {
        navbarToggle.classList.remove('navbar-on');
        navbar.classList.remove('navbar-on');
        navbar.classList.add('nav-hide');
      } else {
        navbarToggle.classList.add('navbar-on');
        navbar.classList.add('navbar-on');
        navbar.classList.remove('nav-hide');
      }
    }

    render() {
    const { children } = this.props;
    return (
      <div>
        <div className="navbar-toggle" id="navbar-toggle" onClick={this.toggleMenu}>
          <div className="bar1"/>
            <div className="bar2"/>
              <div className="bar3" />
        </div>
        <nav className="nav-hide" id="nav">
              {children}
        </nav>
      </div>
    );
  }
}