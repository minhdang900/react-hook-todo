import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TOGGLE_TODO, DELETE_TODO } from "./../constant";
import { TodoContext } from "./../contexts/todos";

const Todo = ({ completed, text }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <li
      onClick={e => {
        if(!completed){
          e.currentTarget.classList.add("checked");
        } else {
          e.currentTarget.classList.remove("checked");
        }
        return dispatch({
          type: TOGGLE_TODO,
          payload: { text, completed: !completed }
        })
       }
      }
      style={{
        cursor: "pointer",
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
      <span className="close" onClick={()=> 
        dispatch({
          type: DELETE_TODO,
          payload: text
        })}></span>
    </li>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
