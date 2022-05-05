// Hamburger menu, meant to contain a list of links <a>
import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';
// Navigation contains a UL of LI elements with links inside, so when page is rendered, convert the array of links to a list of links

export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
      $('.navbar-toggle, nav').click(function () {
          $('.navbar-toggle').toggleClass('navbar-on');
          $('nav').fadeToggle();
          $('nav').removeClass('nav-hide');
      });
  };

  componentDidMount() {
    this.toggleMenu();
  }


    render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    return (
      <div>
        <div className="navbar-toggle">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <nav className="nav-hide">
          <ul>
              {children}
          </ul>
        </nav>
      </div>
    );
  }
}