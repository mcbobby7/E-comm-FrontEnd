import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords, image }) => {
  return (
    <Helmet>
      <title>{title} </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:image" content={image} />

      <meta property="og:image:width" content="180" />

      <meta property="og:image:height" content="110" />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to MCBEE online shopping store",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electronics, online store",
  image: "%PUBLIC_URL%/default.png",
};

export default Meta;
