import React from "react";
import { Style, Style1 } from "./Style";
import data from "./data";
import Loader from "./loader";

class LoadingList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      properties: data.properties,
      property: data.properties[0],
      position: 2,
    };
  }

  nextProperty = () => {
    if (this.state.position < data.properties.length + 1) {
      this.setState((prevState) => ({
        position: prevState.position + 1,
      }));
    }
  };

  prevProperty = () => {
    if (this.state.position > 0) {
      this.setState((prevState) => ({
        position: prevState.position - 1,
      }));
    }
  };

  render() {
    const { properties } = this.state;
    return (
      <>
        <Style num={this.state.position}>
          <button
            onClick={() => this.prevProperty()}
            disabled={this.state.position === 0}
            className="prev_button"
          >
            <i className="fa fa-arrow-left"></i>
          </button>

          <button
            onClick={() => this.nextProperty()}
            disabled={this.state.position === properties.length - 1}
            className="next_button"
          >
            <i className="fa fa-arrow-right"></i>
          </button>

          <div className={`cards-slider active-slide-${this.state.position}`}>
            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${this.state.position * 100}%)`,
              }}
            >
              {
                <>
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                </>
              }
            </div>
          </div>
        </Style>
        <Style1 num={this.state.position}>
          <button
            onClick={() => this.prevProperty()}
            disabled={this.state.position === 0}
            className="prev_button"
          >
            <i className="fa fa-arrow-left"></i>
          </button>

          <button
            onClick={() => this.nextProperty()}
            disabled={this.state.position === properties.length - 1}
            className="next_button"
          >
            <i className="fa fa-arrow-right"></i>
          </button>

          <div className={`cards-slider active-slide-${this.state.position}`}>
            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${this.state.position * 100}%)`,
              }}
            >
              {
                <>
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                </>
              }
            </div>
          </div>
        </Style1>
      </>
    );
  }
}

export default LoadingList;
