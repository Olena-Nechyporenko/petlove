import {
  ImageWrapper,
  Wrapper,
  DescriptionWrapper,
  NameAndBirthdayWrapper,
  Name,
  BirthdayTitle,
  BirthdayDate,
  AnimalDescription,
} from './AnimalInfoBoxLoginRegister.styled';

export const AnimalInfoBox = ({ animalInfo }) => {
  const { img, name, birthday, description } = animalInfo;
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={img} alt="cat" width={32} height={32} />
      </ImageWrapper>
      <DescriptionWrapper>
        <NameAndBirthdayWrapper>
          <Name>{name}</Name>
          <BirthdayTitle>
            Birthday:&nbsp;<BirthdayDate>{birthday}</BirthdayDate>
          </BirthdayTitle>
        </NameAndBirthdayWrapper>

        <AnimalDescription>{description}</AnimalDescription>
      </DescriptionWrapper>
    </Wrapper>
  );
};
