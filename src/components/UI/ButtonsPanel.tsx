import React from "react";
import InputUI from "./InputUI";
import ButtonPanel from "../../style/ButtonPanelStyle";

interface ButtonsPanelProps {
  markAll: () => void;
  deleteCompleted: () => void;
}

const ButtonsPanel: React.FC<ButtonsPanelProps> = (props) => {
  return (
    <ButtonPanel>
      <InputUI type="submit" value="ok" />
      <InputUI type="button" value="Mark All" onClick={props.markAll} />
      <InputUI
        type="button"
        value="Delete completed"
        onClick={props.deleteCompleted}
      />
    </ButtonPanel>
  );
};

export default React.memo(ButtonsPanel);
