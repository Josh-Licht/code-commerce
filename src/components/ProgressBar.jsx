import React from 'react';

class ProgressBar extends React.Component {
  render() {
    return (
      <div>
        <progress value={this.props.progress} max="4"></progress>
      </div>
    );
  }
}

export default ProgressBar;
