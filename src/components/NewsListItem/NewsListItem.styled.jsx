import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';

export const Item = styled.li`
  width: 335px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 24px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 70px) / 3);
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 15px;
  width: 100%;
  height: 190px;
  overflow: hidden;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    height: 226px;
    margin-bottom: 28px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    height: 226px;
  }
`;

export const NewTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: var(--main-txt-color);
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 14px;
  }
`;

export const Description = styled(EllipsisText)`
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--main-txt-color);
  margin-bottom: 19px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 28px;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const ReadMoreLink = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--accent-color);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
