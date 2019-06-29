import React, { useReducer, createContext, useContext, useEffect} from "react";
import toDoReducer from "./../reducers/todos";
import { VisibilityFilters } from "./../constant";
import {useStoreContext} from "../store";


const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  todos: []
};
const TodoContext = createContext(initialState);

function TodoContextProvider(props) {
  // create a global store to store the state
  const globalStore = useStoreContext(useContext(TodoContext), "state");
  // `todos` will be a state manager to manage state.
  const [state, dispatch] = useReducer(toDoReducer, globalStore);
  useEffect(() => localStorage.setItem("state", JSON.stringify(state)), [state]);
  const value = { state, dispatch };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
}
export { TodoContext, TodoContextProvider };
