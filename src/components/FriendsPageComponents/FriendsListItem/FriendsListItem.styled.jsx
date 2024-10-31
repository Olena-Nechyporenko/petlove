import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 14px;
  background: var(--main-light-txt-color);
  border-radius: 15px;
  width: 335px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 40px) / 3);
  }
`;

export const ImgWrapper = styled.a`
  display: block;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  padding: 40px 0 64px 20px;

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
    padding: 40px 0 66px 20px;
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

export const DescrInfoWrapper = styled.div`
  padding: 40px 0;
`;

export const Time = styled.span`
  display: inline-block;
  position: absolute;
  top: 12px;
  right: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: var(--main-accent-color);
  border-radius: 30px;
  background-color: var(--secondary-accent-color);
  padding: 8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: var(--line-height);
  }
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.04em;
  color: var(--main-dark-txt-color);
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 20px;
  }
`;

export const DescrList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 196px;
`;

export const DescrItem = styled.li`
  display: flex;
  gap: 2px;
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.02em;
  color: var(--secondary-dark-txt-color);
`;

export const DescrInfo = styled(EllipsisText)`
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.02em;
  color: var(--main-dark-txt-color);
`;
