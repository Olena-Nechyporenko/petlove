import { AddPetForm } from 'components/AddPetForm/AddPetForm';
import { Section, ImgWrapper, Img } from './AddPetPage.styled';
import img from '../../images/login-desk.jpg';

export default function AddPetPage() {
  return (
    <Section>
      <ImgWrapper>
        <Img src={img} alt="" />
      </ImgWrapper>

      <AddPetForm />
    </Section>
  );
}
