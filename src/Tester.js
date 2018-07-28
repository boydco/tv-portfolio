import React, { Component } from "react";
import ReactPlayer from 'react-player';
import "./Tester.css";

const imgUrls = [
	"https://res.cloudinary.com/boydco112/video/upload/v1532811607/looptrainshort.mp4",
	"https://res.cloudinary.com/boydco112/video/upload/v1532813145/Surfing_-_368.mp4",
	"https://res.cloudinary.com/boydco112/video/upload/v1532813469/Puppy_-_4740.mp4",
	"https://res.cloudinary.com/boydco112/video/upload/v1532813471/Pexels_Videos_2584.mp4",
	"https://res.cloudinary.com/boydco112/video/upload/v1532813759/Pexels_Videos_3467.mp4"
];

class Tester extends Component {
	constructor (props) {
		super(props);

		this.state = {
			currentImageIndex: 0,
      rotation: 0
		};

    this.rotate = this.rotate.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}

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

	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

		this.setState({
			currentImageIndex: index
		});
	}

	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}

	render () {
    const { rotation } =  this.state;
		return (
			<div className="carousel">
        <img style={{transform: `rotate(${rotation}deg)`}} src={"https://res.cloudinary.com/boydco112/image/upload/v1532615155/channel-switcher.png"} onClick={this.rotate} width="120" />
        <ReactPlayer url={ imgUrls[this.state.currentImageIndex] } playing='true' muted='true'/>
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div
		className={ `tvArrow` }
		onClick={ clickFunction }>
		{ glyph }
	</div>
);

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};

	return (
		<div className="image-slide" style={styles}></div>
	);
}

export default Tester;
