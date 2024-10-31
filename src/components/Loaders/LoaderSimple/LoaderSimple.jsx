import { TailSpin } from 'react-loader-spinner';
import { Container } from './LoaderSimple.styled';

const loaderStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const LoaderSimple = () => {
  return (
    <Container>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="var(--main-accent-color)"
        ariaLabel="tail-spin-loading"
        radius="0"
        wrapperStyle={loaderStyles}
      />
    </Container>
  );
};
