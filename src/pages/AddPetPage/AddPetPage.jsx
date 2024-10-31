import { AddPetForm } from 'components/AddPetPageComponents/AddPetForm/AddPetForm';
import { Section, ImageWrapper } from './AddPetPage.styled';
import addPetMob1x from '../../images/add-pet/add-pet-mob-1x.jpg';
import addPetTab1x from '../../images/add-pet/add-pet-tab-1x.jpg';
import addPetDesk1x from '../../images/add-pet/add-pet-desk-1x.jpg';
import addPetMob2x from '../../images/add-pet/add-pet-mob-2x.jpg';
import addPetTab2x from '../../images/add-pet/add-pet-tab-2x.jpg';
import addPetDesk2x from '../../images/add-pet/add-pet-desk-2x.jpg';

export default function AddPetPage() {
  return (
    <Section>
      <ImageWrapper>
        <picture>
          <source srcSet={`${addPetDesk1x} 1x, ${addPetDesk2x} 2x`} media="(min-width: 1280px)" />
          <source srcSet={`${addPetTab1x} 1x, ${addPetTab2x} 2x`} media="(min-width: 768px)" />
          <source srcSet={`${addPetMob1x} 1x, ${addPetMob2x} 2x`} media="(max-width: 767px)" />
          <img src={addPetMob1x} alt={'Dog'} loading="lazy" />
        </picture>
      </ImageWrapper>
      <AddPetForm />
    </Section>
  );
}
