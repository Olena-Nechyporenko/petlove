import {
  Wrapper,
  Title,
  AddPetLink,
  AddIcon,
  PetsList,
  PetsItem,
  ImgWrapper,
  Img,
  Name,
  DescrList,
  DescrItem,
  DescrInfo,
  DeleteButton,
} from './PetsBlock.styled';
import img from '../../images/dog-info-box.png';

export const PetsBlock = () => {
  return (
    <>
      <Wrapper>
        <Title>My pets</Title>
        <AddPetLink to="/add-pet">
          Add pet
          <AddIcon
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 3.75V14.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.75 9H14.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </AddIcon>
        </AddPetLink>
      </Wrapper>

      <PetsList>
        <PetsItem>
          <ImgWrapper>
            <Img src={img} alt="" />
          </ImgWrapper>

          <div>
            <Name text={'Golden Retriever Puppies'} length={22} />

            <DescrList>
              <DescrItem>
                Name
                <DescrInfo>Daisy</DescrInfo>
              </DescrItem>
              <DescrItem>
                Birthday
                <DescrInfo>01.10.2022</DescrInfo>
              </DescrItem>
              <DescrItem>
                Sex
                <DescrInfo>Female</DescrInfo>
              </DescrItem>
              <DescrItem>
                Species
                <DescrInfo>Dog</DescrInfo>
              </DescrItem>
            </DescrList>
          </div>
          <DeleteButton type="button">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4H3.33333H14"
                stroke="#F6B83D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.6673 4.00001V13.3333C12.6673 13.687 12.5268 14.0261 12.2768 14.2762C12.0267 14.5262 11.6876 14.6667 11.334 14.6667H4.66732C4.3137 14.6667 3.97456 14.5262 3.72451 14.2762C3.47446 14.0261 3.33398 13.687 3.33398 13.3333V4.00001M5.33398 4.00001V2.66668C5.33398 2.31305 5.47446 1.97392 5.72451 1.72387C5.97456 1.47382 6.3137 1.33334 6.66732 1.33334H9.33399C9.68761 1.33334 10.0267 1.47382 10.2768 1.72387C10.5268 1.97392 10.6673 2.31305 10.6673 2.66668V4.00001"
                stroke="#F6B83D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66602 7.33334V11.3333"
                stroke="#F6B83D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33398 7.33334V11.3333"
                stroke="#F6B83D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </DeleteButton>
        </PetsItem>

        <PetsItem>
          <ImgWrapper>
            <Img src={img} alt="" />
          </ImgWrapper>

          <div>
            <Name text={'Golden Retriever Puppies'} length={22} />

            <DescrList>
              <DescrItem>
                Name
                <DescrInfo>Daisy</DescrInfo>
              </DescrItem>
              <DescrItem>
                Birthday
                <DescrInfo>01.10.2022</DescrInfo>
              </DescrItem>
              <DescrItem>
                Sex
                <DescrInfo>Female</DescrInfo>
              </DescrItem>
              <DescrItem>
                Species
                <DescrInfo>Dog</DescrInfo>
              </DescrItem>
            </DescrList>
          </div>
          <DeleteButton type="button">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4H3.33333H14"
                stroke="#F6B83D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.6673 4.00001V13.3333C12.6673 13.687 12.5268 14.0261 12.2768 14.2762C12.0267 14.5262 11.6876 14.6667 11.334 14.6667H4.66732C4.3137 14.6667 3.97456 14.5262 3.72451 14.2762C3.47446 14.0261 3.33398 13.687 3.33398 13.3333V4.00001M5.33398 4.00001V2.66668C5.33398 2.31305 5.47446 1.97392 5.72451 1.72387C5.97456 1.47382 6.3137 1.33334 6.66732 1.33334H9.33399C9.68761 1.33334 10.0267 1.47382 10.2768 1.72387C10.5268 1.97392 10.6673 2.31305 10.6673 2.66668V4.00001"
                stroke="#F6B83D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66602 7.33334V11.3333"
                stroke="#F6B83D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33398 7.33334V11.3333"
                stroke="#F6B83D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </DeleteButton>
        </PetsItem>
      </PetsList>
    </>
  );
};
