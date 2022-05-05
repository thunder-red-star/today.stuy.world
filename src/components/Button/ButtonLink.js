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
  }

  render() {
    return (
      <Button {...this.state} onClick={(e) => window.open(this.state.href, '_blank')}>
        {this.props.children}
      </Button>
    );
  }
}