import { CHANGE_FILTER, TOGGLE_TODO, TOGGLE_ALL_TODO, ADD_TODO, DELETE_TODO, LOAD_TODO, VisibilityFilters } from "./../constant";

const toDoReducer = (state, { type, payload }) => {
  switch (type) {
    case LOAD_TODO:
      return {...payload }
      
    case CHANGE_FILTER:
      return { ...state, filter: payload };

    case TOGGLE_TODO: {
      const todos = state.todos.map(todo =>
        todo.text === payload.text ? { ...todo, ...payload } : todo
      );
      return { ...state, todos };
    }

    case TOGGLE_ALL_TODO: {
      let todos = [];
      if(payload === VisibilityFilters.SHOW_COMPLETED){
        todos = state.todos.map(todo => todo.completed?{...todo, completed:false}:todo);
        return { ...state, todos, filter: payload };
      } else if(payload === VisibilityFilters.SHOW_ACTIVE){
        todos = state.todos.map(todo => !todo.completed?{...todo, completed:true}:todo);
        return { ...state, todos, filter: payload };
      }
      todos = state.todos.map(todo => ({ ...todo, completed: !todo.completed }));
      return { ...state, todos, filter: payload };
    }

    case ADD_TODO: {
      // return current state if duplicate
      if (state.todos.filter(t => t.text === payload.text).length > 0) {
        return state;
      }
      const todos = [...state.todos, payload];
      return { ...state, todos };
    }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(t => t.text !== payload)
      };
    default:
      return state;
  }
};

export default toDoReducer;
