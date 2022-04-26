import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import store from '../store';
import Button from '../Components/Button';
import {
  listUserCurrentTask,
  userGenerateNewCurrentTask,
  userCompletedCurrentTask,
  listUserDetails,
} from '../Actions/userActions';

const StyledPopup = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function DefaultNotification() {
  const userId = '62676953fad2994f34150e0f';
  const dashboardUrl = 'http://localhost:3000/';
  const dispatch = useDispatch();

  var thisState = useSelector((state) => state);
  var task = thisState.userCurrentTask.task;

  useEffect(() => {
    dispatch(listUserCurrentTask(userId));
    dispatch(listUserDetails(userId));
    task = thisState.userCurrentTask.task;
  }, [dispatch]);

  //generate new task on button click
  function newTask(e) {
    dispatch(userGenerateNewCurrentTask(userId));
    setTimeout(refreshTask, 800);
  }

  function refreshTask() {
    dispatch(listUserCurrentTask(userId));
  }

  //complete task on button click
  function completeTask(e) {
    dispatch(userCompletedCurrentTask(userId));
    setTimeout(refreshTask, 800);
  }

  return (
    <StyledPopup>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <Button onClick={newTask}>Give Me Another Task</Button>
      <Button onClick={completeTask}>Task Completed</Button>
      <Button>Remind Me Later</Button>
      <a href={dashboardUrl} target='_blank'>
        <p>Go to Dashboard</p>
      </a>
    </StyledPopup>
  );
}

export default DefaultNotification;
