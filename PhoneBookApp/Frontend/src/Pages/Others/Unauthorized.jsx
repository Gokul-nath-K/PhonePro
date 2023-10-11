import React from "react";

const Unauthorized = () => {
  return (
    <div id="app-unauth">
      <div className="app-unauth">403</div>
      <div className="txt">
        Forbidden<span className="blink">_</span>
      </div>
    </div>
  );
};

export default Unauthorized;
