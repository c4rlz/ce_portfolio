import React, { Component } from 'react';
import WheelReact from 'wheel-react';
import Nav from './Nav';
import Heading from './Heading';
import ProgressBar from './ProgressBar';

class Landing extends Component {
  constructor() {
    super();
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    WheelReact.config({
      up: () => {
        console.log('up');
        const pageChange = parseInt(this.state.page + 1, 10);
        this.setState({ page: pageChange });
        console.log(this.state.page);
      },
      down: () => {
        let pageChange;
        if (this.state.page !== 0) {
          pageChange = parseInt(this.state.page - 1, 10);
        } else {
          this.state.page = this.props.numberOfPages;
        }
        this.setState({ page: pageChange });
        console.log(this.state.page);
      }
    });
  }
  state = {
    page: 0,
    userProgress: 0
  };
  componentWillUnmount() {
    WheelReact.clearTimeout();
  }
  props: {
    numberOfPages: 6
  };

  calculatePercentage = (num, dividedBy) => parseInt(num / dividedBy, 10) * 100;

  handleScrollEvent = event => {
    const currentPercentage = this.calculatePercentage(
      this.state.page,
      this.props.numberOfPages
    );
    this.setState({ userProgress: currentPercentage });
  };
  render() {
    return (
      <div
        className="content-container"
        onWheel={this.handleScrollEvent}
        {...WheelReact.events}
      >
        <div className="navigation">
          <Nav />
        </div>
        <div className="main-content">
          <Heading
            heading="Carly Ewasiuk"
            subheading="Front-End Developer & UX Enthusiast"
          />
          <ProgressBar />
        </div>
      </div>
    );
  }
}

export default Landing;
