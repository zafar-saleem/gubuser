import { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { SearchInput, Loader, } from '../../components/';
import { useSearch, useAppTitle } from '../../contexts/';
import useAPIGateway from '../../hooks/userAPIGateway/';
import { StyledContainer } from './Search.styled';

export const Search = () => {
  const usernameRef = useRef();
  const { setTitle } = useAppTitle();
  const {
    data,
    loader,
    setHttpProps,
    error,
  } = useAPIGateway();
  const { setSearchedItems } = useSearch();

  const triggerSearch = (event) => {
    setHttpProps({
      endPoint: [`users/${usernameRef.current.value}`],
      method: 'GET',
    });
  }

  useEffect(() => {
    if (Object.keys(data).includes('id')) {
      setSearchedItems({
        profile: data,
      });
    }
  }, [data]);

  useEffect(() => {
    setTitle('Search');
  }, []);

  return (
    <StyledContainer>
      <SearchInput
        usernameRef={usernameRef}
        triggerSearch={triggerSearch}
        error={error}
        placeholder="Enter Github Username e.g. zafar-saleem" />
      {
        loader
        ?
          <Loader label="Searching..." fullscreen />
        :
          Object.keys(data).includes('id')
          ?
            <Navigate to={`user/${data.login}`} />
          :
            null
      }
    </StyledContainer>
  );
}
