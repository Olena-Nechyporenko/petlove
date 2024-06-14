import styled from 'styled-components';
import imgMob from '../../images/login-mob.jpg';
import imgTab from '../../images/login-tab.jpg';
import imgDesk from '../../images/login-desk.jpg';

export const Wrapper = styled.section`
  padding-bottom: 30px;

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 32px;
  }
`;

export const BgImageWrapper = styled.div`
  background-image: url(${imgMob});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 280px;
  border-radius: 30px;
  overflow: hidden;
  background-color: var(--accent-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    background-image: url(${imgTab});
    height: 302px;
    border-radius: 60px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${imgDesk});
    width: 592px;
    height: 654px;
    margin-bottom: 0;
  }
`;
