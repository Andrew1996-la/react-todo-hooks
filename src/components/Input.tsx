import React, { useState } from "react";
import ButtonsPanel from "./UI/ButtonsPanel";
import { InputTask, InputText } from "../style/InputStyle";

interface InputProps {
  addNewTask: (text: string) => void;
  markAll: () => void;
  deleteCompleted: () => void;
}

const Input = ({ addNewTask, deleteCompleted, markAll }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue !== "") {
      addNewTask(inputValue);
    }
    setInputValue("");
  };

  return (
    <>
      <form className="InputProps" onSubmit={sendForm}>
        <InputText>
          <span>Enter your task:</span>
          <InputTask
            onChange={handleInput}
            placeholder="Enter"
            value={inputValue}
            type="text"
          />
        </InputText>
        <ButtonsPanel markAll={markAll} deleteCompleted={deleteCompleted} />
      </form>
    </>
  );
};

export default React.memo(Input);
