import styled from 'styled-components';

export const Item = styled.li`
  width: 360px;
`;

export const ImgWrapper = styled.div`
  border-radius: 15px;
  width: 360px;
  height: 226px;
  overflow: hidden;
  margin-bottom: 28px;
`;

export const Img = styled.img`
  width: 100%;
  height: 226px;
  object-fit: cover;
  object-position: center;
`;

export const NewTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.03em;
  color: var(--main-txt-color);
  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--main-txt-color);
  margin-bottom: 28px;
`;

export const Date = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`;
