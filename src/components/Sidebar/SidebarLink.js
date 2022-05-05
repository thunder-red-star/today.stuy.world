// Sidebar Link component
// Contains a sidebar link, which is a link to another page
import React from 'react';
import { Link } from 'react-router-dom';

export default class SidebarLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  // Set the active state of the link
  setActive = () => {
    this.setState({
      isActive: true
    });
  };

  // Set the inactive state of the link
  setInactive = () => {
    this.setState({
      isActive: false
    });
  };

  render() {
    return (
      <li
        className={
          this.state.isActive
            ? "sidebar-link active"
            : "sidebar-link"
        }
      >
        <Link
          to={this.props.to}
          onClick={this.props.onClick}
          onMouseEnter={this.setActive}
          onMouseLeave={this.setInactive}
        >
          {this.props.children}
        </Link>
      </li>
    );
  }
}