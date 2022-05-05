// Hamburger menu component
// On click, it toggles the state of the menu, and opens or closes it
// A hamburger menu contains a Sidebar, which is a container for the menu items

import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

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
        <button
          className="hamburger-menu__button"
          onClick={this.toggleMenu}
          type="button"
        >
          <span className="hamburger-menu__button-line" />
          <span className="hamburger-menu__button-line" />
          <span className="hamburger-menu__button-line" />
        </button>
        <Sidebar isOpen={isOpen}>{children}</Sidebar>
      </div>
    );
  }
}