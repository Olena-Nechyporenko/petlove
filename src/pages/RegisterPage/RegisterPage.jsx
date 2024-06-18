import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { BgImageWrapper, Wrapper } from './RegisterPage.styled';
import { AnimalInfoBox } from 'components/AnimalInfoBoxLoginRegister/AnimalInfoBoxLoginRegister';
import catImg from '../../images/cat-info-box.png';

const animalInfo = {
  img: catImg,
  name: 'Jack',
  birthday: '18.10.2021',
  description:
    'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.',
};

export default function RegisterPage() {
  return (
    <Wrapper>
      <BgImageWrapper>
        <AnimalInfoBox animalInfo={animalInfo} />
      </BgImageWrapper>
      <RegisterForm />
    </Wrapper>
  );
}
