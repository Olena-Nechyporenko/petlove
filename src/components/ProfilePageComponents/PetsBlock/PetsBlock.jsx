import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';
import { deletePet, getFullUserInfo } from 'redux/userProfile/operations';
import { selectFullUserInfo, selectIsLoading } from 'redux/userProfile/selectors';
import { LoaderSimple } from 'components/Loaders/LoaderSimple/LoaderSimple';
import {
  Wrapper,
  Title,
  AddPetLink,
  AddIcon,
  PetsListContainer,
  PetsList,
  PetsItem,
  ImgWrapper,
  Img,
  DetailsWrapper,
  Name,
  DescrList,
  DescrItem,
  DescrInfo,
  DeleteButton,
  DeleteIcon,
  NoAnimalWrapp,
  NoAnimalsText,
  HighlightedWords,
} from './PetsBlock.styled';

export const PetsBlock = () => {
  const [pets, setPets] = useState([]);

  const dispatch = useDispatch();
  const userPets = useSelector(selectFullUserInfo);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getFullUserInfo());
  }, [dispatch]);

  useEffect(() => {
    setPets(userPets?.pets || []);
  }, [userPets]);

  const formatedDate = birthday => {
    const date = parseISO(birthday);
    return format(date, 'dd.MM.yyyy');
  };

  const handleDeletePet = petInfo => {
    Notiflix.Confirm.show(
      'Removing from added pets',
      `Are you sure you want to remove ${petInfo.name} from added?`,
      'Yes',
      'No',
      async function okCb() {
        dispatch(deletePet(petInfo.petId));
        setPets(prevPets => prevPets.filter(pet => pet._id !== petInfo.petId));
      },
      function cancelCb() {},
      {
        width: '320px',
        borderRadius: '8px',
      }
    );
  };

  return (
    <>
      <Wrapper>
        <Title>My pets</Title>
        <AddPetLink to="/add-pet">
          Add pet
          <AddIcon />
        </AddPetLink>
      </Wrapper>
      <PetsListContainer>
        {isLoading ? (
          <LoaderSimple />
        ) : (
          <>
            {pets.length > 0 && !isLoading ? (
              <PetsList>
                {pets?.map(({ _id, title, name, sex, species, imgURL, birthday }) => (
                  <PetsItem key={_id}>
                    <ImgWrapper>
                      <Img src={imgURL} alt="Pet" />
                    </ImgWrapper>

                    <DetailsWrapper>
                      <Name text={title} length={22} />

                      <DescrList>
                        <DescrItem>
                          Name
                          <DescrInfo>{name}</DescrInfo>
                        </DescrItem>
                        <DescrItem>
                          Birthday
                          <DescrInfo>{formatedDate(birthday)}</DescrInfo>
                        </DescrItem>
                        <DescrItem>
                          Sex
                          <DescrInfo>{sex}</DescrInfo>
                        </DescrItem>
                        <DescrItem>
                          Species
                          <DescrInfo>{species}</DescrInfo>
                        </DescrItem>
                      </DescrList>
                    </DetailsWrapper>
                    <DeleteButton type="button" onClick={() => handleDeletePet({ petId: _id, name: name })}>
                      <DeleteIcon />
                    </DeleteButton>
                  </PetsItem>
                ))}
              </PetsList>
            ) : (
              <NoAnimalWrapp>
                <NoAnimalsText>
                  It
                  <HighlightedWords>looks like you haven't added furries </HighlightedWords>
                  yet. Don't worry! You can add your first furry using the "Add pet" button.
                </NoAnimalsText>
              </NoAnimalWrapp>
            )}
          </>
        )}
      </PetsListContainer>
    </>
  );
};
