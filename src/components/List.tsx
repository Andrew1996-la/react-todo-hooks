import React from "react";
import ListItem from "./ListItem";
import { Task } from "../types";
import ListOfTasks from "../style/ListStyle";

interface ListProps {
  tasks: Task[];
  markTask: (id: number, marked: boolean) => void;
  deleteTask: (id: number) => void;
  toggleEditMode: (id: number) => void;
  changeTask: (id: number, text: string) => void;
}

const List = ({
  changeTask,
  deleteTask,
  markTask,
  tasks,
  toggleEditMode,
}: ListProps) => {
  return (
    <ListOfTasks className="list">
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          task={task}
          changeTask={changeTask}
          deleteTask={deleteTask}
          toggleEditMode={toggleEditMode}
          markTask={markTask}
        />
      ))}
    </ListOfTasks>
  );
};

export default React.memo(List);
