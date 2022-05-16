import styled from 'styled-components';

export const StyledBackdrop = styled.section`
  display: ${props => props.fullscreen ? `block` : `none`};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: .7;
  z-index: 100;
`;

export const StyledLabel = styled.p`
  display: ${props => props.fullscreen ? `block` : `none`};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  font-weight: bold;
`;

export const StyledLoader = styled.section`
  display: ${props => !props.fullscreen ? `block` : `none`};
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80px',
  height: '80px',

  '&:after': {
    content: '" "',
    display: 'block',
    width: '64px',
    height: '64px',
    margin: '8px',
    borderRadius: '50%',
    border: '6px solid #39211e',
    borderColor: '#39211e transparent #39211e transparent',
    animation: 'dual-ring 1.2s linear infinite',
  },

  '@keyframes dual-ring': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
`;