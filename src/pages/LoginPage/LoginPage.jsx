import { LoginForm } from 'components/LoginForm/LoginForm';
import { BgImageWrapper, Wrapper } from './LoginPage.styled';
import { AnimalInfoBox } from 'components/AnimalInfoBoxLoginRegister/AnimalInfoBoxLoginRegister';
import dogImg from '../../images/dog-info-box.png';

const animalInfo = {
  img: dogImg,
  name: 'Rich',
  birthday: '21.09.2020',
  description:
    'Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!',
};

export default function LoginPage() {
  return (
    <Wrapper>
      <BgImageWrapper>
        <AnimalInfoBox animalInfo={animalInfo} />
      </BgImageWrapper>
      <LoginForm />
    </Wrapper>
  );
}
