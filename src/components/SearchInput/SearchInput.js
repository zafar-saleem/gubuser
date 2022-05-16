// import { useEffect, useRef } from 'react';
import { Button } from '..';
import {
  StyledSearch,
  StyledInput,
  StyleButtonContainer,
  StyledError,
} from './Search.styled';

export const SearchInput = ({
  usernameRef,
  placeholder,
  type = 'text',
  error,
  triggerSearch = () => null,
}) => {
  return (
    <StyledSearch>
      <StyledInput type={type} name="search" ref={usernameRef} placeholder={placeholder} />
      {
        error
        ?
        <StyledError>{`${error?.status} ${error?.text}`}</StyledError>
        :
        null
      }
      <StyleButtonContainer>
        <Button triggerOperation={triggerSearch} label="Search" align="right" />
      </StyleButtonContainer>
    </StyledSearch>
  );
}