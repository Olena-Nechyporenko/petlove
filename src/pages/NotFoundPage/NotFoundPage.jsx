import {
  Section,
  Container,
  NumbersWrapper,
  Image,
  Text,
  Link,
} from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <Section>
      <Container>
        <NumbersWrapper>
          4 <Image /> 4
        </NumbersWrapper>
        <Text>Ooops! This page not found :&#40;</Text>
        <Link to="/">To home page</Link>
      </Container>
    </Section>
  );
}
