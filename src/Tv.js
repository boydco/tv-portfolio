import React, { Component } from "react";
import ReactPlayer from 'react-player';
import "./Tv.css";

const imgUrls = [
	"https://res.cloudinary.com/boydco112/video/upload/v1532811607/looptrainshort.mp4",
	"https://res.cloudinary.com/boydco112/video/upload/v1532813145/Surfing_-_368.mp4",
	"https://res.cloudinary.com/boydco112/video/upload/v1532813469/Puppy_-_4740.mp4",
	"https://res.cloudinary.com/boydco112/video/upload/v1532813471/Pexels_Videos_2584.mp4",
	"https://res.cloudinary.com/boydco112/video/upload/v1532813759/Pexels_Videos_3467.mp4"
];

class Tv extends Component {
	constructor (props) {
		super(props);

		this.state = {
			currentImageIndex: 0,
      rotation: 0
		};

    this.rotate = this.rotate.bind(this);
	}

  handleKeyDown = (ev) => {
         // check keys if you want
       if (ev.keyCode == 13) {
         this.focus()
        }
     }
     focus = () => this.ref.focus;

     handleRef = (component) => {
       this.ref = component;
     };

  rotate(){
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    let newRotation = this.state.rotation + 30;
    if(newRotation >= 360){
      newRotation =- 360;
    }
    this.setState({
      rotation: newRotation,
      currentImageIndex: index
    })
  }

	render () {
    const { rotation } =  this.state;
		return (
      <div>
      <div className="tvBox">
         <img style={{transform: `rotate(${rotation}deg)`}} src={"https://res.cloudinary.com/boydco112/image/upload/v1532615155/channel-switcher.png"} onClick={this.rotate} onKeyDown={this.handleKeyDown} width="120" />
      </div>
			<div className="carousel">
        <ReactPlayer url={ imgUrls[this.state.currentImageIndex] } playing='true' muted='true'/>
			</div>
      </div>
		);
	}
}

export default Tv;
