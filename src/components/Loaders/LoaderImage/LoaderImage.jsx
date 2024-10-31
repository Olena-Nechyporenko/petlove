import { TailSpin } from 'react-loader-spinner';
import { Container } from './LoaderImage.styled';

const loaderStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const LoaderImage = () => {
  return (
    <Container>
      <TailSpin
        visible={true}
        height="120"
        width="120"
        color="var(--main-accent-color)"
        ariaLabel="tail-spin-loading"
        radius="0"
        wrapperStyle={loaderStyles}
      />
    </Container>
  );
};
