import { RegisterForm } from 'components/LoginRegisterPagesComponents/RegisterForm/RegisterForm';
import { AnimalInfoBox } from 'components/LoginRegisterPagesComponents/AnimalInfoBoxLoginRegister/AnimalInfoBoxLoginRegister';
import { ImageWrapper, Wrapper } from './RegisterPage.styled';
import catRegisterBox from '../../images/register/cat-register-box.png';
import registerMob1x from '../../images/register/register-mob-1x.jpg';
import registerTab1x from '../../images/register/register-tab-1x.jpg';
import registerDesk1x from '../../images/register/register-desk-1x.jpg';
import registerMob2x from '../../images/register/register-mob-2x.jpg';
import registerTab2x from '../../images/register/register-tab-2x.jpg';
import registerDesk2x from '../../images/register/register-desk-2x.jpg';

const animalInfo = {
  img: catRegisterBox,
  name: 'Jack',
  birthday: '18.10.2021',
  description:
    'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.',
};

export default function RegisterPage() {
  return (
    <Wrapper>
      <ImageWrapper>
        <picture>
          <source srcSet={`${registerDesk1x} 1x, ${registerDesk2x} 2x`} media="(min-width: 1280px)" />
          <source srcSet={`${registerTab1x} 1x, ${registerTab2x} 2x`} media="(min-width: 768px)" />
          <source srcSet={`${registerMob1x} 1x, ${registerMob2x} 2x`} media="(max-width: 767px)" />
          <img src={registerMob1x} alt={'Cat'} loading="lazy" />
        </picture>
        <AnimalInfoBox animalInfo={animalInfo} />
      </ImageWrapper>
      <RegisterForm />
    </Wrapper>
  );
}
