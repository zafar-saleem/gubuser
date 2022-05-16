import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: .3fr 1fr;
  grid-gap: 1rem;
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 5rem;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background: #008532;
  border-radius: 0.3rem;
  box-shadow: 0 0.1rem 0.3rem #999;
  opacity: .8;

  &:hover {
    opacity: 1;
  }
`;