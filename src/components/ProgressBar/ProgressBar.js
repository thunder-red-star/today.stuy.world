// ProgressBar component
import React from 'react';

export default class ProgressBar extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  progress: this.props.progress,
	  max: this.props.max,
		color: this.props.color,
	}
  }

  componentWillReceiveProps(nextProps) {
	this.setState({
	  progress: nextProps.progress,
	  max: nextProps.max,
		color: nextProps.color,
	});
  }

  render() {
	return (
	  <div className="progress-bar">
		<div className="progress-bar-inner" style={{
		  width: this.state.progress + '%',
		  backgroundColor: this.state.color,
		}}></div>
	  </div>
	);
  }
}