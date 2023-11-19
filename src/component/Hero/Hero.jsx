import Section from './Section';

function Hero() {
  const textHero = [
    'New Arrival', 
    'Discover Our New Collection', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
    'Buy Now'];
  return (
    <div>
      <Section textHero={textHero}/>
    </div>
  );
}

export default Hero;
