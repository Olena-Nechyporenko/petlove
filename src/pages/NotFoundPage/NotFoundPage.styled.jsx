import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import img from '../../images/register-mob.jpg';

export const Section = styled.section`
  padding-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: var(--main-accent-color);
  border-radius: 30px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
  }
`;

export const NumbersWrapper = styled.div`
  font-size: 120px;
  font-weight: 800;
  line-height: 1;
  color: var(--main-light-txt-color);
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    font-size: 300px;
    gap: 0;
    margin-bottom: 20px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffc24a;
  border-radius: 50%;
  width: 109px;
  height: 109px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

export const Image = styled.img`
  width: 109px;
  height: 109px;
  border-radius: 1000px;

  @media screen and (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: var(--main-light-txt-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`;

export const Link = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: var(--main-accent-color);
  background-color: var(--secondary-accent-color);
  border-radius: 30px;
  padding: 12px 30px;
  transition: all var(--main-transition);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 30px;
  }

  &:hover {
    background-color: var(--hover-secondary-accent-color);
  }
`;
