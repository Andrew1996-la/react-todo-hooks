import React, { useCallback, useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
import { Task } from "./types";
import ToDoApp from "./style/AppStyle";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addNewTask = useCallback((text: string): void => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text, editMode: false, completed: false },
    ]);
  }, []);

  const markTask = useCallback((id: number, marked: boolean): void => {
    setTasks((prev) =>
      prev.map((task) => {
        return task.id === id ? { ...task, completed: marked } : task;
      })
    );
  }, []);

  const deleteTask = useCallback((id: number): void => {
    setTasks((prev) => prev.filter((tasks) => tasks.id !== id));
  }, []);

  const toggleEditMode = useCallback((id: number): void => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        return task.id === id ? { ...task, editMode: !task.editMode } : task;
      });
    });
  }, []);

  const changeTask = useCallback((id: number, text: string): void => {
    setTasks((prevTask) => {
      return prevTask.map((task) => {
        return task.id === id ? { ...task, text } : task;
      });
    });
  }, []);

  const markAll = useCallback((): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({ ...task, completed: true }))
    );
  }, []);

  const deleteCompleted = useCallback((): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  }, []);

  return (
    <ToDoApp className="app">
      <Input
        addNewTask={addNewTask}
        markAll={markAll}
        deleteCompleted={deleteCompleted}
      />
      <List
        markTask={markTask}
        deleteTask={deleteTask}
        toggleEditMode={toggleEditMode}
        changeTask={changeTask}
        tasks={tasks}
      />
    </ToDoApp>
  );
}

export default App;
