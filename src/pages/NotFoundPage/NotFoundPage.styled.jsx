import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../images/register-mob.jpg';

export const Section = styled.section`
  padding-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: var(--accent-color);
  border-radius: 30px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
  }
`;

export const NumbersWrapper = styled.div`
  font-weight: 800;
  font-size: 120px;
  line-height: 1;
  color: var(--light-color);
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    font-size: 300px;
    gap: 0;
    margin-bottom: 20px;
  }
`;

export const Image = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
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
  color: var(--light-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`;

export const Link = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--accent-color);
  background-color: #fff4df;
  border-radius: 30px;
  padding: 12px 30px;
  transition: all var(--main-transition);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 30px;
  }

  &:hover {
    background-color: #fbe7c1;
  }
`;
