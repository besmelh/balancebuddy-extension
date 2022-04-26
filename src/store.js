import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { taskListReducer, taskDetailsReducer } from './Reducers/taskReducers';
import {
  userDetailsReducer,
  userCurrentTaskReducer,
  generateNewTaskReducer,
  completedCurrentTaskReducer,
} from './Reducers/userReducers';

const reducer = combineReducers({
  taskList: taskListReducer,
  taskDetails: taskDetailsReducer,
  userDetails: userDetailsReducer,
  userCurrentTask: userCurrentTaskReducer,
  generateNewTask: generateNewTaskReducer,
  completedCurrentTask: completedCurrentTaskReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
