import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: false,
      toggle: false
    };
    this.rotatingDone = this.rotatingDone.bind(this);
  }
  componentDidMount() {
    const elm = this.image;
    elm.addEventListener("animationend", this.rotatingDone);
  }
  componentWillUnmount() {
    const elm = this.image;
    elm.removeEventListener("animationend", this.rotatingDone);
  }

  rotatingDone() {
    this.setState(function(state) {
      return {
        toggle: !state.toggle,
        rotate: false
      };
    });
  }
  render() {
    const { rotate, toggle } = this.state;

    return (
      <img
        src={
           "https://res.cloudinary.com/boydco112/image/upload/v1532615155/channel-switcher.png"
        }
        ref={elm => {
          this.image = elm;
        }}
        onClick={() => this.setState({ rotate: true })}
        className={rotate ? "rotate" : ""}
      />
    );
  }
}

export default Image;
