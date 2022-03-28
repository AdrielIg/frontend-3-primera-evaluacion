import React, { Component } from "react";
import data from "./data";
import { Options } from "./Options";
import { Record } from "./Record";

const INITIAL_STATE = {
  record: [],
  counter: 1,
  lastSelection: "",
  end: false,
};

export class Main extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleClick = ({ target: { id } }) => {
    this.setState({
      lastSelection: id,
      counter: this.state.counter + 1,
      record: [...this.state.record, id],
      end: this.state.counter === 4,
    });
  };

  handleReset = () => {
    this.setState(INITIAL_STATE);
  };

  getHistory = () => {
    const [currentHistory] = data.filter(
      (history) =>
        history.id === getId(this.state.counter, this.state.lastSelection)
    );
    return currentHistory;
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">
          {
            this.getHistory(data, this.state.counter, this.state.lastSelection)
              .historia
          }
        </h1>

        {!this.state.end && (
          <Options
            handleClick={this.handleClick}
            optionA={
              this.getHistory(
                data,
                this.state.counter,
                this.state.lastSelection
              ).opciones.a
            }
            optionB={
              this.getHistory(
                data,
                this.state.counter,
                this.state.lastSelection
              ).opciones.b
            }
          />
        )}
        {this.state.end && (
          <button className="botones reset" onClick={this.handleReset}>
            Reset History
          </button>
        )}
        <Record
          prevSelection={this.state.lastSelection}
          historySelection={this.state.record}
        />
      </div>
    );
  }
}

const getId = (counter, id) => {
  if (!id) return `${counter}`;
  return `${counter}${id.toLowerCase()}`;
};
