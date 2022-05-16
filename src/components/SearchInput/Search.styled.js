import styled from 'styled-components';

export const StyledSearch = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50vw;
  transform: translate(-50%, -50%);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: .5rem;
  border: 1px solid #cccccc;
  border-radius: .5rem;
`;

export const StyleButtonContainer = styled.section`
  width: 5rem;
  text-align: right;
`;

export const StyledError = styled.span`
  color: red;
  text-align: left;
`;