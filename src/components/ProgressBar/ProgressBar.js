// ProgressBar component
import React from 'react';

export default class ProgressBar extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  progress: this.props.progress,
	  max: this.props.max,
		color: this.props.color,
		width: this.props.width,
		height: this.props.height,
	}
  }

  componentWillReceiveProps(nextProps) {
	this.setState({
	  progress: nextProps.progress,
	  max: nextProps.max,
		width: nextProps.width,
		height: nextProps.height,
	});
  }

  render() {
	return (
	  <div id="progress-bar" className="progress-bar" style={{
		width: `${this.state.width}%`,
		height: `${this.state.height}px`,
	  }}>
		<div id="progress-bar-inner" className="progress-bar-inner" style={{
		  width: this.state.progress + '%',
			height: `100%`,
			position: 'relative',
		}}></div>
	  </div>
	);
  }
}