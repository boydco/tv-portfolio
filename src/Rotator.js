import React, { Component } from 'react';
import './Rotator.css';

class Rotator extends Component{
  constructor(props){
    super(props);
    this.state = {
      rotation: 0
    }

    this.rotate = this.rotate.bind(this);
  }

  rotate(){
    let newRotation = this.state.rotation + 30;
    if(newRotation >= 360){
      newRotation =- 360;
    }
    this.setState({
      rotation: newRotation,
    })
  }

  render(){
    const { rotation } =  this.state;
    return <img style={{transform: `rotate(${rotation}deg)`}} src={"https://res.cloudinary.com/boydco112/image/upload/v1532615155/channel-switcher.png"} onClick={this.rotate} width="120" />
  }
}



export default Rotator;
