import { useAppTitle } from '../../contexts/';
import { StyledHeader, StyledTitle } from './Header.styled';

export const Header = ({ position }) => {
  const { title, setTitle } = useAppTitle();

  return (
    <StyledHeader position={position}>
      <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
  );
}