import {
  StyledBackdrop,
  StyledLabel,
  StyledLoader,
} from './Loader.styled';

export const Loader = ({ label = 'Loading...', fullscreen = false, }) => {
  return (
    <>
      <StyledBackdrop fullscreen={fullscreen}></StyledBackdrop>
      <StyledLabel fullscreen={fullscreen}>{label}</StyledLabel>
      <StyledLoader fullscreen={fullscreen}>{label}</StyledLoader>
    </>
  )
}
