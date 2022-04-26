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

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userCurrentTaskReducer = (
  state = { task: { resources: [] } },
  action
) => {
  switch (action.type) {
    case USER_CURRENT_TASK_REQUEST:
      return { loading: true, ...state };
    case USER_CURRENT_TASK_SUCCESS:
      return { loading: false, task: action.payload };
    case USER_CURRENT_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const generateNewTaskReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_GENERATE_NEW_TASK_REQUEST:
      return { loading: true, ...state };
    case USER_GENERATE_NEW_TASK_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_GENERATE_NEW_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const completedCurrentTaskReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_COMPLETED_TASK_REQUEST:
      return { loading: true, ...state };
    case USER_COMPLETED_TASK_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_COMPLETED_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
