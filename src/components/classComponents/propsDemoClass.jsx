import { Component } from "react";

class PropsDemoClass extends Component {
  render() {
    return (
      <div>
        <h2>Props Demo (Class)</h2>
        <p>Hello, my name is <strong>{this.props.name}</strong>.</p>
        <p>I stay in <b> {this.props.city} </b>.</p>
      </div>
    );
  }
}

export default PropsDemoClass;
