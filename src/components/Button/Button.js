// Button component for the application
import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isPressed: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({
      isHovered: true,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      isHovered: false,
    });
  };

  handleMouseDown = () => {
    this.setState({
      isPressed: true,
    });
  };

  handleMouseUp = () => {
    this.setState({
      isPressed: false,
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
    const { isHovered, isPressed } = this.state;
    const buttonClassName = classNames(
      'button',
      {
        'button--hovered': isHovered,
        'button--pressed': isPressed,
        'button--disabled': disabled,
      },
      className
    );
    return (
      <button
        className={buttonClassName}
        onClick={onClick}
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