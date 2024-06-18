import {
  Hero,
  Container,
  MainTitle,
  TitleHighlightedWord,
  SubTitle,
} from './HeroSection.styled';

export const HeroSection = () => {
  return (
    <Hero>
      <Container>
        <MainTitle>
          Take good&nbsp;
          <TitleHighlightedWord>care</TitleHighlightedWord> of your small pets
        </MainTitle>
        <SubTitle>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </SubTitle>
      </Container>
    </Hero>
  );
};
