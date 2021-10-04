import React from "react";
import { Style } from "./Style";
import data from "./data";
import Card from "./Card";

class ImageSlider extends React.Component {
  constructor(props) {
    super();
    this.state = {
      properties: props.properties,
      property: data.properties[0],
      position: 1.4,
    };
  }

  nextProperty = () => {
    console.log(this.state.position, this.state.properties.length);
    this.setState((prevState) => ({
      position: this.state.position + 1,
    }));
  };

  prevProperty = () => {
    this.setState((prevState) => ({
      position: prevState.position - 1,
    }));
  };

  render() {
    const { properties } = this.state;
    return (
      <Style num={this.state.position}>
        <button onClick={() => this.prevProperty()} className="prev_button">
          <i className="fa fa-arrow-left"></i>
        </button>

        <button onClick={() => this.nextProperty()} className="next_button">
          <i className="fa fa-arrow-right"></i>
        </button>

        <div className={`cards-slider active-slide-${this.state.position}`}>
          <div
            className="cards-slider-wrapper"
            style={{
              transform: `translateX(-${this.state.position * 100}%)`,
            }}
          >
            {properties.map((propertyItem) => (
              <Card key={propertyItem._id} propertyProp={propertyItem} />
            ))}
          </div>
        </div>
      </Style>
    );
  }
}

export default ImageSlider;
