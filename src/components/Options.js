import { Component } from "react";

export class Options extends Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button id="A" className="botones" onClick={this.props.handleClick}>
            A
          </button>
          <h3>{this.props.optionA}</h3>
        </div>
        <div className="opcion">
          <button id="B" className="botones" onClick={this.props.handleClick}>
            B
          </button>
          <h3>{this.props.optionB}</h3>
        </div>
      </div>
    );
  }
}
