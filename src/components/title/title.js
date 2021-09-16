import React from "react";
import { Container } from "./style";

function Title({ title }) {
  return (
    <Container>
      <div className="dash"></div>
      <div className="title">{title}</div>
    </Container>
  );
}

export default Title;
