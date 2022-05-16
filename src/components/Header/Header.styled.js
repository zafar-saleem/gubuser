import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: ${(prop) => `${prop.position}`};
  width: 100vw;
  margin-bottom: 1.5rem;
  top: ${props => props.position === 'sticky' ? `0` : null};
  color: #ffffff;
  padding: 1.5rem;
  background-color: #066fd5;
  box-shadow: 0 5px 10px 1px #999;
  z-index: 1;
`;

export const StyledTitle = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
  text-align: center;
`;