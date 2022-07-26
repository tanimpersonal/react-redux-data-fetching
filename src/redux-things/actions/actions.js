import axios from "axios";
import {
  getTodosFailed,
  getTodosRequest,
  getTodosSuccess,
} from "../constants/constants";
const api = "https://jsonplaceholder.typicode.com/todos";
export const getTodos = () => async (dispatch) => {
  dispatch({ type: getTodosRequest });

  try {
    const res = await axios.get(api);
    dispatch({ type: getTodosSuccess, payload: res.data });
  } catch (error) {
    dispatch({ type: getTodosFailed, payload: error.message });
  }
};
