import styled from 'styled-components';

export const StyledContainer = styled.section`
  // width: 5rem;
  text-align: ${props => props.align};
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: .5rem 1rem;
  margin-bottom: 1rem;
  color: ${props => props.fontColor};
  font-weight: 600;
  border: ${props => props.color};
  border-radius: .3rem;
  background-color: ${props => props.color};
  box-shadow: 0 .1rem .3rem grey;
  cursor: pointer;
  opacity: .8;

  &:hover {
    // background: #105dc3;
    opacity: 1;
  }
`;