import React from "react";
import { Banner } from "./style";

function Card({ img }) {
  return (
    <Banner img={img}>
      <div className="bannerDiv"></div>
    </Banner>
  );
}

export default Card;
