import { HeroSection } from 'components/HomePageComponents/HeroSection/HeroSection';
import { ImageWrapper } from './HomePage.styled';
import homeMob1x from '../../images/home/home-mob-1x.jpg';
import homeTab1x from '../../images/home/home-tab-1x.jpg';
import homeDesk1x from '../../images/home/home-desk-1x.jpg';
import homeMob2x from '../../images/home/home-mob-2x.jpg';
import homeTab2x from '../../images/home/home-tab-2x.jpg';
import homeDesk2x from '../../images/home/home-desk-2x.jpg';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImageWrapper>
        <picture>
          <source srcSet={`${homeDesk1x} 1x, ${homeDesk2x} 2x`} media="(min-width: 1280px)" />
          <source srcSet={`${homeTab1x} 1x, ${homeTab2x} 2x`} media="(min-width: 768px)" />
          <source srcSet={`${homeMob1x} 1x, ${homeMob2x} 2x`} media="(max-width: 767px)" />
          <img src={homeMob1x} alt={'Person with dog'} loading="lazy" />
        </picture>
      </ImageWrapper>
    </>
  );
}
