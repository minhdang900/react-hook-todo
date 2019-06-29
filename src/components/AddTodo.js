import React, { useContext, useState } from "react";
import { ADD_TODO } from "./../constant";
import { TodoContext } from "./../contexts/todos";

const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const input = useFromInput("");
  const { resetValue, ...inputProp } = input;
  const handleSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch({
      type: ADD_TODO,
      payload: {
        completed: false,
        text: input.value
      }
    });
    resetValue();
  };
  return (
    <div className="header">
      <form onSubmit={e => handleSubmit(e)}>
        <input placeholder="Enter todo name here" {...inputProp} />
      </form>
    </div>
  );
};

// custom hook which is reusable wherever you want to use an input
function useFromInput(initValue = "") {
  const [value, setValue] = useState(initValue);
  const onChange = e => setValue(e.target.value);
  const resetValue = newValue => setValue(newValue || initValue);
  return { value, onChange, resetValue };
}

export default AddTodo;
