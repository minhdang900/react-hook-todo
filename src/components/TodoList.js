import React, { useContext } from "react";
import Todo from "./Todo";
import { VisibilityFilters } from "./../constant";
import { TodoContext } from "./../contexts/todos";

const TodoList = () => {
  const { state } = useContext(TodoContext);
  const todos = applyFilter(state);
  let message = `Todo list is empty`;
  if(VisibilityFilters.SHOW_COMPLETED === state.filter){
    message = `Todo list completed is empty`;
  } else if(VisibilityFilters.SHOW_ACTIVE === state.filter) {
    message = `Todo list active is empty`;
  }
  return (
    <div>
    <ul>
      {todos.map(todo => (
        <Todo key={todo.text} {...todo} />
      ))}
      {todos.length === 0 &&
        <li>{message}</li>
      }
    </ul>
    </div>
  );
};

const applyFilter = state => {
  const { filter, todos } = state;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default TodoList;
