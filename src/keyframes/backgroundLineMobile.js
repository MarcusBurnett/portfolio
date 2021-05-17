import { keyframes } from 'styled-components/macro';

export default keyframes`
0% {
	transform: rotateZ(-45deg) translate(0, 0);
  opacity: 0;
}
50% {
  opacity: 0.3;
}
100% {
  transform: rotateZ(-45deg) translate(200%, 200%);
  opacity: 0;
}
`;
