import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

const duration = 500;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'translateX(-200px)',
  display: 'inline-block'
};

const transitionStyles = {
  entering: { opacity: 0, transform: 'translateX(-200px)' },
  entered: { opacity: 1, transform: 'translateX(0)' }
};

class Heading extends Component {
  state = {
    in: true
  };
  checkDescription = () =>
    this.props.description ? <p> {this.props.description} </p> : null;

  checkIcon = () =>
    this.props.icon
      ? <h4> {this.props.icon} {this.props.subheading} </h4>
      : <h4> {this.props.subheading} </h4>;

  render() {
    const { description, icon, subheading, heading } = this.props;
    return (
      <Transition in={this.state.in} timeout={duration} appear>
        {state => (
          <div
            className="page-heading"
            style={{ ...defaultStyle, ...transitionStyles[state] }}
          >

            <h1> {heading} </h1>
            {this.checkIcon()}
            {/* <h4> {props.subheading} </h4> */}
            {this.checkDescription()}
          </div>
        )}
      </Transition>
    );
  }
}

export default Heading;
