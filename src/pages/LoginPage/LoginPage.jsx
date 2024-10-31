import { LoginForm } from 'components/LoginRegisterPagesComponents/LoginForm/LoginForm';
import { AnimalInfoBox } from 'components/LoginRegisterPagesComponents/AnimalInfoBoxLoginRegister/AnimalInfoBoxLoginRegister';
import { Wrapper, ImageWrapper } from './LoginPage.styled';
import dogLoginBox from '../../images/login/dog-login-box.png';
import loginMob1x from '../../images/login/login-mob-1x.jpg';
import loginTab1x from '../../images/login/login-tab-1x.jpg';
import loginDesk1x from '../../images/login/login-desk-1x.jpg';
import loginMob2x from '../../images/login/login-mob-2x.jpg';
import loginTab2x from '../../images/login/login-tab-2x.jpg';
import loginDesk2x from '../../images/login/login-desk-2x.jpg';

const animalInfo = {
  img: dogLoginBox,
  name: 'Rich',
  birthday: '21.09.2020',
  description:
    'Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!',
};

export default function LoginPage() {
  return (
    <Wrapper>
      <ImageWrapper>
        <picture>
          <source srcSet={`${loginDesk1x} 1x, ${loginDesk2x} 2x`} media="(min-width: 1280px)" />
          <source srcSet={`${loginTab1x} 1x, ${loginTab2x} 2x`} media="(min-width: 768px)" />
          <source srcSet={`${loginMob1x} 1x, ${loginMob2x} 2x`} media="(max-width: 767px)" />
          <img src={loginMob1x} alt={'Dog'} loading="lazy" />
        </picture>
        <AnimalInfoBox animalInfo={animalInfo} />
      </ImageWrapper>
      <LoginForm />
    </Wrapper>
  );
}
