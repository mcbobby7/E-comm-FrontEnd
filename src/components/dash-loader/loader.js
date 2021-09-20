import React from "react";
import { Box } from "./style";

function Loading() {
  return (
    <Box>
      <div class="al">
        <div class="as">
          <div class="lds-hourglass"></div>
          <div class="lo">Loading...</div>
        </div>
      </div>
    </Box>
  );
}

export default Loading;
