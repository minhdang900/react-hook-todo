import React, { useReducer, createContext, useContext } from "react";
import toDoReducer from "./../reducers/todos";
import { VisibilityFilters } from "./../constant";
import {storeReducer, useStoreContext} from "../store";


const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  todos: []
};
const TodoContext = createContext(initialState);

function TodoContextProvider(props) {
  // create a global store to store the state
  const globalStore = useStoreContext(useContext(TodoContext), "state");
  // `todos` will be a state manager to manage state.
  const [state, dispatch] = storeReducer(
    useReducer(toDoReducer, globalStore),
    "state" // The localStorage key
  );
  const value = { state, dispatch };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
}
export { TodoContext, TodoContextProvider };
