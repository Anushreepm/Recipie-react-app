import React from "react";

export default function ButtonsTab(props) {
  const { data } = props;
  console.log(data);
  return (
    <>
      <div className="button-block" onClick={() => data.changeFilter("All")}>
        {" "}
        All RECIPEIS{" "}
      </div>
      <div
        className="button-block"
        onClick={() => data.changeFilter("Incorrect")}
      >
        INCORRECT
      </div>
      <div
        className="button-block"
        onClick={() => data.changeFilter("Untagged")}
      >
        UNTAGGED
      </div>
      <div
        className="button-block"
        onClick={() => data.changeFilter("Disabled")}
      >
        DISABLED
      </div>
    </>
  );
}
