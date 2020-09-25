import React from "react";
import ButtonsTab from "./ButtonsTab";
import DataContainer from "./DataContainer";

function BodyContainer(props) {
  console.log(props);
  const { state } = props;
  return (
    <div className="body-container">
      <div className="buttons-tab">
        <ButtonsTab data={state} />
      </div>
      <div className="data-container">
        <DataContainer data={state} />
      </div>
    </div>
  );
}

export default BodyContainer;
