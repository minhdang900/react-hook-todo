import React, { useReducer, createContext} from "react";
import toDoReducer from "./../reducers/todos";
import { VisibilityFilters } from "./../constant";
import {useLoadTodo, useStoreTodo} from "../store";

const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  todos: [],
  loaded: false
};

const TodoContext = createContext(initialState);

function TodoContextProvider(props) {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  useLoadTodo(dispatch);
  useStoreTodo(state);
  return (
    <TodoContext.Provider value={{state, dispatch}}>{props.children}</TodoContext.Provider>
  );
}
export { TodoContext, TodoContextProvider };
