import React from "react";
import { Skeleton } from "./Style";

function Loader() {
  return (
    <Skeleton>
      <div className="skeleton">
        <div className="skeleton-img"></div>
        <div className="skeleton-text">
          <p className="skeleton-title"></p>
          <span
            href="#"
            className="skeleton-link"
            style={{ width: "150px" }}
          ></span>
          <span href="#" className="skeleton-link"></span>
        </div>
      </div>
    </Skeleton>
  );
}

export default Loader;
