import { StyledContainer, StyledButton } from './Button.styled';

export const Button = ({
  triggerOperation,
  label,
  align = 'left',
  color = '#066fd5',
  fontColor = '#ffffff',
}) => {
  return (
    <StyledContainer align={align}>
      <StyledButton
        onClick={triggerOperation}
        color={color}
        fontColor={fontColor}
      >{label}</StyledButton>
    </StyledContainer>
  );
}
