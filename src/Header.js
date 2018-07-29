import React, { Component } from "react";
import "./Header.css";


class Header extends Component {
	constructor (props) {
		super(props);

	}

	render () {
		return (
      <div className="header-container">
        <h1>Colin Boyd</h1>
        <span>Developer | Designer</span>
        <p>Chicago, IL</p>
      </div>
		);
	}
}

export default Header;
