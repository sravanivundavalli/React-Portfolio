import { CTAButton } from "../styles/common/CTAButton.styled";
import { HeroContent, HeroSocialIcons, StyledArrowDown, StyledHeroSection, SocialIcon } from "../styles/sections/HeroSection.styled"
import {FaArrowDown, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";

export const HeroSection = () => {
  return (
  <StyledHeroSection id ="hero-section">
    <HeroContent>
        <h1>Sravani Vundavalli</h1>
        <h3>{"{Front-End Web Developer}"}</h3>
        <p> HTML . CSS . JavaScript . React . MUI</p>
        <div>
            <CTAButton href="#projects"> Projects</CTAButton>
            <CTAButton href="#contact" primary margin = "0 0 0 20px">
                Contact
             </CTAButton>
        </div>
    </HeroContent>
    <StyledArrowDown href="#about">
    <FaArrowDown/>
    </StyledArrowDown>
    <HeroSocialIcons>
        <SocialIcon href="https://github.com/sravanivundavalli" target="_blank">
            <FaGithub />
            </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/sravanivundavalli/" target="_blank">
            <FaLinkedin />
            </SocialIcon>
        <SocialIcon href="https://www.facebook.com/sravani.vundavalli.13" target="_blank">
            <FaFacebook />

        </SocialIcon>
    </HeroSocialIcons>
  </StyledHeroSection>  
  );
};