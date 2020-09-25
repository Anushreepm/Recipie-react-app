import React from "react";
import Fluctuating from "./Fluctuating";
import HighMargin from "./HighMargin";
import { LowMargin } from "./LowMargin";

function Header() {
  return (
    <div className="main-header">
      <div className="main-header-block">
        <HighMargin />
      </div>
      <div className="main-header-block">
        <LowMargin />
      </div>
      <div className="main-header-block">
        <Fluctuating />
      </div>
    </div>
  );
}

export default Header;
