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
  entered: { opacity: 1, transform: 'translateX(5%)' }
};

class Fade extends Component {
  state = {
    in: true
  };
  render() {
    const { heading, subheading } = this.props;
    return (
      <Transition in={this.state.in} timeout={duration} appear>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <h1> {heading} </h1>
            <h4> {subheading} </h4>
          </div>
        )}
      </Transition>
      
    );
  }
}

export default Fade;
