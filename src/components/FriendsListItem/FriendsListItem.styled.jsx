import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 14px;
  background: var(--light-color);
  border-radius: 15px;
  width: 335px;

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
  color: var(--accent-color);
  border-radius: 30px;
  background-color: #fff4df;
  padding: 8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.04em;
  color: var(--main-txt-color);
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
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`;

export const DescrInfo = styled(EllipsisText)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--main-txt-color);
`;
