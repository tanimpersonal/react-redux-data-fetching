import {
  getTodosFailed,
  getTodosRequest,
  getTodosSuccess,
} from "../constants/constants";

const initialState = {
  isLoading: false,
  todos: [],
  error: null,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case getTodosRequest:
      return {
        ...state,
        isLoading: true,
      };
    case getTodosSuccess:
      return {
        isLoading: false,
        todos: action.payload,
        error: null,
      };
    case getTodosFailed:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };
    default:
      return initialState;
  }
};

export default todosReducer;
