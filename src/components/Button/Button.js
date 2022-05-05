// Button component for the application
import React from 'react';
import classNames from 'classnames';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ishovered: false,
      ispressed: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({
      ishovered: true,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      ishovered: false,
    });
  };

  handleMouseDown = () => {
    this.setState({
      ispressed: true,
    });
  };

  handleMouseUp = () => {
    this.setState({
      ispressed: false,
    });
  };

  render() {
    const {
      children,
      className,
      onClick,
      type,
      disabled,
      ...otherProps
    } = this.props;
    const { ishovered, ispressed } = this.state;
    const buttonClassName = classNames(
      'button',
      {
        'button--hovered': ishovered,
        'button--pressed': ispressed,
        'button--disabled': disabled,
      },
      className
    );
    return (
      <button
        className={buttonClassName}
        onClick={this.onClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        type={type}
        disabled={disabled}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
}