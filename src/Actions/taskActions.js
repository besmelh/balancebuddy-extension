import axios from 'axios';
import {
  TASK_LIST_REQUEST,
  TASK_LIST_SUCCESS,
  TASK_LIST_FAIL,
  TASK_DETAILS_REQUEST,
  TASK_DETAILS_SUCCESS,
  TASK_DETAILS_FAIL,
} from '../Constants/taskConstants';

export const listTasks = () => async (dispatch) => {
  try {
    dispatch({ type: TASK_LIST_REQUEST });
    const { data } = await axios.get('/api/tasks');
    dispatch({ type: TASK_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TASK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTaskDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TASK_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/tasks/${id}`);
    dispatch({ type: TASK_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TASK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
