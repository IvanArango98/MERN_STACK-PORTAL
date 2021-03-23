import React, { Component } from "react";
import '../login/login.css'

class TransformText extends Component {
  state = {
    text: this.props.text
  };

  render() {    
    return this.state.text;
  }
}

export default TransformText;