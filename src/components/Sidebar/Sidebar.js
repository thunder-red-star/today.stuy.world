// Sidebar component
// Contains a list of SidebarLinks

import SidebarLink from './SidebarLink';
import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>
            <i className="fas fa-bars" />
            <span>Menu</span>
          </h3>
        </div>
        <div className="sidebar-links">
            { this.props.children }
        </div>
      </div>
    );
  }
}