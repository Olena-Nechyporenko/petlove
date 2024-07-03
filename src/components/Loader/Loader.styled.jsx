import styled from 'styled-components';
import img from '../../images/loader-mob.jpg';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;
