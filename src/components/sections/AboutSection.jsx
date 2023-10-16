import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  ImageContainer,
  StyleHeading,
  StyledAboutSection,
  StyledImage,
  AboutContent,
  GradientCircle,
  DarkCircle,
  StyledEmoji,
} from "../styles/sections/AboutSection.styled";

export const AboutSection = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <ImageContainer>
          <StyledImage src="./images/Sravani.png" alt="Sravani Vundavalli" />
          <DarkCircle />
          <GradientCircle />
        </ImageContainer>
        <AboutContent>
          <StyleHeading>
            Hello <StyledEmoji>👋</StyledEmoji>
          </StyleHeading>

          <p>
            A passionate front-end web developer with a keen eye for design and
            a drive for crafting user-friendly, intuitive digital experiences.
            I've honed my skills in HTML5, CSS3, JavaScript, and various modern
            frameworks and libraries. I'm dedicated to staying up-to-date with
            the latest trends and technologies in the ever-evolving world of web
            development.
          </p>
          <p>
            I believe that a well-designed website is not only visually
            appealing but also highly functional. My goal is to create seamless,
            responsive, and cross-browser compatible interfaces that engage and
            delight users. Whether it's optimizing performance or ensuring
            accessibility, I'm committed to delivering top-notch results. I'm
            not just a coder; I'm a problem solver. I thrive on challenges and
            enjoy collaborating with teams to bring ideas to life.
          </p>
          <CTAButton
            href="./resume/Sravani_Vundavalli_CV.pdf"
            download="Sravani_Vundavalli_CV.pdf"
          >
            Download Resume
          </CTAButton>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
