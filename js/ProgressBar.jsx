import React, { Component } from 'react';

class ProgressBar extends Component {
  state = {
    userProgress: 0
  };
  props: {
    page: 0,
    numberOfPages: 6
  };
  calculatePercentage = (num, dividedBy) => parseInt(num / dividedBy, 10) * 100;

  handleScrollEvent = () => {
    const currentPercentage = this.calculatePercentage(
      this.props.page,
      this.props.numberOfPages
    );
    this.setState({ userProgress: currentPercentage });
  };

  render() {
    return (
      <div className="progressBar">
        <div className="progress">
          {this.state.userProgress}

        </div>
      </div>
    );
  }
}

export default ProgressBar;