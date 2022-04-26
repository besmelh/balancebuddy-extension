import axios from 'axios';
import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_CURRENT_TASK_REQUEST,
  USER_CURRENT_TASK_SUCCESS,
  USER_CURRENT_TASK_FAIL,
  USER_GENERATE_NEW_TASK_REQUEST,
  USER_GENERATE_NEW_TASK_SUCCESS,
  USER_GENERATE_NEW_TASK_FAIL,
  USER_COMPLETED_TASK_REQUEST,
  USER_COMPLETED_TASK_SUCCESS,
  USER_COMPLETED_TASK_FAIL,
} from '../Constants/userConstants';

export const listUserDetails = (user_id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/user/${user_id}`);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listUserCurrentTask = (user_id) => async (dispatch) => {
  try {
    dispatch({ type: USER_CURRENT_TASK_REQUEST });
    const { data } = await axios.get(`/api/user/${user_id}/current_task`);
    dispatch({ type: USER_CURRENT_TASK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_CURRENT_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userGenerateNewCurrentTask = (user_id) => async (dispatch) => {
  try {
    dispatch({ type: USER_GENERATE_NEW_TASK_REQUEST });
    const { data } = await axios.get(
      `/api/user/${user_id}/new_random_current_task`
    );
    dispatch({ type: USER_GENERATE_NEW_TASK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_GENERATE_NEW_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userCompletedCurrentTask = (user_id) => async (dispatch) => {
  try {
    dispatch({ type: USER_COMPLETED_TASK_REQUEST });
    const { data } = await axios.get(`/api/user/${user_id}/add_completed_task`);
    dispatch({ type: USER_COMPLETED_TASK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_COMPLETED_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
