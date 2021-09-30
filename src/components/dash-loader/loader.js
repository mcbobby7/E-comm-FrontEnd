import React from "react";
import { Box } from "./style";

function Loading() {
  return (
    <Box>
      <div className="al">
        <div className="as">
          <div className="lds-hourglass"></div>
          <div className="lo">Loading...</div>
        </div>
      </div>
    </Box>
  );
}

export default Loading;
