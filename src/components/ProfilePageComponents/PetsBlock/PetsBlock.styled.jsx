import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';
import { NavLink } from 'react-router-dom';
import { IoAdd } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: var(--tertiary-dark-txt-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const AddPetLink = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: var(--main-light-txt-color);
  background-color: var(--main-accent-color);
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 16px;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-accent-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 10px 20px;
  }
`;

export const AddIcon = styled(IoAdd)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;

export const PetsListContainer = styled.div`
  position: relative;
  min-height: 200px;
`;

export const PetsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    flex-wrap: nowrap;
    height: 278px;
    overflow-y: auto;
    padding-right: 5px;
    margin-bottom: 40px;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(38, 38, 38, 0.08);
      border-radius: 13px;
    }
  }
`;

export const PetsItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  border: 1px solid rgba(38, 38, 38, 0.1);
  border-radius: 20px;
  padding: 16px 45px 16px 16px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 14px) / 2);
    padding: 22px 27px 22px 16px;
    box-sizing: border-box;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    gap: 25px;
    padding: 20px 62px 20px 20px;
  }
`;

export const ImgWrapper = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 100px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
  }

  @media screen and (min-width: 1280px) {
    width: 90px;
    height: 90px;
  }
`;

export const Img = styled.img`
  width: 66px;
  height: 66px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
  }

  @media screen and (min-width: 1280px) {
    width: 90px;
    height: 90px;
  }
`;

export const DetailsWrapper = styled.div`
  flex: 1;
`;

export const Name = styled(EllipsisText)`
  display: block;
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  color: var(--tertiary-dark-txt-color);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const DescrList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

export const DescrItem = styled.li`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: var(--secondary-dark-txt-color);
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DescrInfo = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: var(--main-dark-txt-color);
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-accent-color);
  background-color: var(--secondary-accent-color);
  border: none;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-secondary-accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1280px) {
    top: 20px;
    right: 20px;
    width: 38px;
    height: 38px;
  }
`;

export const DeleteIcon = styled(FaRegTrashAlt)`
  width: 16px;
  height: 16px;
  fill: currentColor;
`;

export const NoAnimalWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 278px;
`;

export const NoAnimalsText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--main-dark-txt-color);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    width: 458px;
    margin: 0 auto;
  }
`;

export const HighlightedWords = styled.span`
  font-weight: 700;
  color: var(--main-accent-color);
`;
