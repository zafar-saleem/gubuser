import { Loader } from '../../';
import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledFigure,
  StyledFigCaption,
} from './PersonalInfo.styled';

export const PersonalInfo = ({ data, loader }) => {
  return (
    <StyledContainer>
      {
        loader
        ?
          <Loader label="Loading..." />
        :
        <StyledList>
          <StyledListItem>
            <StyledFigure>
              <img
                src={data?.avatar_url}
                alt={`${data?.name}
                profile avatar`}
                width="100%"
              />
              <StyledFigCaption>{data?.name}</StyledFigCaption>
            </StyledFigure>
          </StyledListItem>
          <StyledListItem>
            <span>{data?.public_repos} repositories</span>
          </StyledListItem>
        </StyledList>
      }
    </StyledContainer>
  );
}
