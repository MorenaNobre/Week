import Video from "../../videos/videoY.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mov" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Comunicação</HeroH1>
        <HeroP>
          As soft skills se referem às competências comportamentais e são tão importantes quanto as habilidades técnicas. A comunicação é uma delas!
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
