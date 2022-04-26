import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #62bdca;
  height: 30px;
  width: 100%;
  border: 0px;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 16px;

  :hover {
    opacity: 70%;
  }
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
