import styled from 'styled-components';
import loaderMob1x from '../../../images/loader/loader-mob-1x.jpg';
import loaderTab1x from '../../../images/loader/loader-tab-1x.jpg';
import loaderDesk1x from '../../../images/loader/loader-desk-1x.jpg';
import loaderMob2x from '../../../images/loader/loader-mob-2x.jpg';
import loaderTab2x from '../../../images/loader/loader-tab-2x.jpg';
import loaderDesk2x from '../../../images/loader/loader-desk-2x.jpg';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  background-image: url(${loaderMob1x});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${loaderMob2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${loaderTab1x});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${loaderTab2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${loaderDesk1x});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${loaderDesk2x});
    }
  }
`;
