// Button link, on click, open the link in a new tab
// Extends button found in ./Button.js
import React from 'react';
import Button from './Button.js';

export default class ButtonLink extends Button {
  constructor(props) {
    super(props);
    // Store href in state
    this.state = {
      href: props.href
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // On click, open the link in a new tab
  handleClick(e) {
    e.preventDefault();
    window.open(this.state.href, '_blank');
  }

  render() {
    return (
      <Button {...this.state} onClick={this.handleClick()}>
        {this.props.children}
      </Button>
    );
  }
}