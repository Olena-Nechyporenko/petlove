import styled from 'styled-components';
import mainImgMob from '../../images/homepage-img-mob.jpg';
import mainImgTab from '../../images/homepage-img-tab.jpg';
import mainImgDesk from '../../images/homepage-img-desk.jpg';

export const MainImage = styled.div`
  background-image: url(${mainImgMob});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 402px;
  border-radius: 30px;
  overflow: hidden;
  background-color: var(--accent-color);

  @media screen and (min-width: 768px) {
    background-image: url(${mainImgTab});
    border-radius: 60px;
    height: 496px;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${mainImgDesk});
    height: 384px;
  }
`;
