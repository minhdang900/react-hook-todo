import React, { useContext } from "react";
import Button from "./Button";

import { CHANGE_FILTER, VisibilityFilters, TOGGLE_ALL_TODO } from "./../constant";
import { TodoContext } from "./../contexts/todos";

const BUTTONS_FILTER = [
  {
    id: 1,
    caption: "All",
    type: CHANGE_FILTER,
    filter: VisibilityFilters.SHOW_ALL
  },
  {
    id: 2,
    caption: "Done",
    type: CHANGE_FILTER,
    filter: VisibilityFilters.SHOW_COMPLETED
  },
  {
    id: 3,
    caption: "Active",
    type: CHANGE_FILTER,
    filter: VisibilityFilters.SHOW_ACTIVE
  }
];

const Footer = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div className="btn-group">
      <Button
          className="btn"
          onClick={() => dispatch({ type: TOGGLE_ALL_TODO, payload: state.filter})}
        >
          {"Toggle All"}
      </Button>
      {BUTTONS_FILTER.map(({ id, caption, type, filter }) => (
        <Button
          className={state.filter === filter?"btn active": "btn"}
          onClick={() => dispatch({ type, payload: filter })}
          key={id}
        >
          {caption}
        </Button>
      ))}
    </div>
  );
};

export default Footer;
