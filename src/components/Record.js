import { Component } from "react";

export class Record extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h4>
          Previous Selection: <span>{this.props.prevSelection}</span>
        </h4>
        <h4>
          History Selection: {"\u00A0"}
          {this.props.historySelection.map((option, index) => (
            <span key={index}>
              {++index}°{option} -{" "}
            </span>
          ))}
        </h4>
      </div>
    );
  }
}
