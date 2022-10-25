import React from "react";
import { Task } from "../types";
import { ListItemClose, TaskListItem } from "../style/ListItemStyle";
import CreateElement from "./UI/CreateElement";

interface ListItemProps {
  task: Task;
  markTask: (id: number, marked: boolean) => void;
  deleteTask: (id: number) => void;
  toggleEditMode: (id: number) => void;
  changeTask: (id: number, text: string) => void;
}

const ListItem = ({
  changeTask,
  deleteTask,
  markTask,
  task: { completed, editMode, id, text },
  toggleEditMode,
}: ListItemProps) => {
  const handleMark = (e: any) => {
    markTask(id, e.target.checked);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <TaskListItem className="listItem">
      <input type="checkbox" checked={completed} onChange={handleMark} />
      <span tabIndex={0}>
        {" "}
        <CreateElement
          editMode={editMode}
          changeTask={changeTask}
          toggleEditMode={toggleEditMode}
          id={id}
          textOfTasks={text}
        />
      </span>
      <ListItemClose tabIndex={0} onClick={handleDelete}>
        &#10006;
      </ListItemClose>
    </TaskListItem>
  );
};

export default React.memo(ListItem, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
