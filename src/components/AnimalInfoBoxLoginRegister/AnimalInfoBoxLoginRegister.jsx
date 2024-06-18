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
      <ImageWrapper img={img} />
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
