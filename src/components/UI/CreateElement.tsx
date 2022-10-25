import React, { useState } from "react";

interface CreateElementProps {
  editMode: boolean;
  id: number;
  changeTask: (id: number, text: string) => void;
  toggleEditMode: (id: number) => void;
  textOfTasks: string;
}

const CreateElement = ({
  changeTask,
  editMode,
  id,
  textOfTasks,
  toggleEditMode,
}: CreateElementProps) => {
  const [note, setNote] = useState(textOfTasks);

  const rewriteTask = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNote(e.target.value);
  };

  const handleBlur = () => {
    changeTask(id, note);
    toggleEditMode(id);
  };

  const handleKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      changeTask(id, note);
      toggleEditMode(id);
    }
  };

  const handleEditMode = () => {
    toggleEditMode(id);
  };

  if (editMode) {
    return (
      <input
        type="text"
        ref={(input) => input && input.focus()}
        onChange={rewriteTask}
        value={note}
        onBlur={handleBlur}
        onKeyDown={handleKeyDownEnter}
      />
    );
  }
  return <span onDoubleClick={handleEditMode}>{textOfTasks}</span>;
};

export default CreateElement;
