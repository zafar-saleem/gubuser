import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  PersonalInfo,
  UserRepos,
} from '../../components/';
import { useSearch, useAppTitle } from '../../contexts/';
import useAPIGateway from '../../hooks/userAPIGateway/';
import {
  StyledGrid,
  // StyledButtonContainer,
  StyledLink,
} from './User.styled';

export const User = () => {
  const { userid } = useParams();
  const { profile } = useSearch().searchedItems;
  const { setTitle } = useAppTitle();
  const [page, setPage] = useState(1);
  const {
    data,
    loader,
    setHttpProps,
  } = useAPIGateway();
  const userInfo = profile || data[1]?.data;
  const userRepos = Array.isArray(data) && data[0]?.data || data;

  useEffect(() => {
    setHttpProps({
      method: 'GET',
      endPoint: [`users/${userid}/repos`, (profile && !Object.keys(profile).includes('id')) || `users/${userid}`],
      params: {
        sort: 'created',
        order: 'desc',
        per_page: 50,
        page: page,
      }
    });
  }, [page]);

  const updatePage = () => {
    setPage(page => page + 1);
  }

  if (userInfo) {
    setTitle(`${userInfo.name}'s profile`);
  }
  
  return (
    <>
      <StyledLink to="/">Back</StyledLink>
      {/*<Button triggerOperation={() => navigate(-1)} label="Back" color="#008532" />*/}
      <StyledGrid>
        <PersonalInfo data={userInfo} loader={loader} />
        <UserRepos data={userRepos} repos={userInfo.public_repos} loader={loader} updatePage={updatePage} />
      </StyledGrid>
    </>
  );
}
