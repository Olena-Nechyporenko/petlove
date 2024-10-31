import { Section, Container, NumbersWrapper, ImageWrapper, Image, Text, Link } from './NotFoundPage.styled';
import catImg from '../../images/not-found/not-found-cat.png';

export default function NotFoundPage() {
  return (
    <Section>
      <Container>
        <NumbersWrapper>
          4
          <ImageWrapper>
            <Image src={catImg} alt="cat" />
          </ImageWrapper>
          4
        </NumbersWrapper>
        <Text>Ooops! This page not found :&#40;</Text>
        <Link to="/">To home page</Link>
      </Container>
    </Section>
  );
}
