import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 40px;
`;

export const ImgWrapper = styled.div`
  width: 94px;
  height: 94px;
  border-radius: 100px;
  overflow: hidden;
  margin: 0 auto 8px;

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 110px;
    margin: -38px auto 8px;
  }
`;

export const Img = styled.img`
  width: 94px;
  height: 94px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;

export const UploadPhotoButton = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main-dark-txt-color);
  background-color: transparent;
  border: none;
  display: block;
  margin: 0 auto 28px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: var(--line-height);
    margin: 0 auto 20px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: var(--tertiary-dark-txt-color);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 14px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const InfoItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: var(--main-dark-txt-color);
  border: 1px solid var(--main-accent-color);
  border-radius: 30px;
  height: 42px;
  display: flex;
  align-items: center;
  padding-left: 12px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 14px) / 2);
    font-size: 16px;
    line-height: 1.25;
    height: 52px;
    padding-left: 16px;
    box-sizing: border-box;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: auto;
  }
`;
