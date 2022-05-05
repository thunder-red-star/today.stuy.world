// Button link, on click, open the link in a new tab
// Extends button found in ./Button.js
import React from 'react';
import Button from './Button.js';

export default class ButtonLink extends Button {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      href: props.href,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  render() {
    return (
      <Button {...this.state}>
        {this.props.children}
      </Button>
    );
  }
}