import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  ContactInfo,
  DetailsWrapper,
  ImageWrapper,
  StyledContactSection,
} from "../styles/sections/ContactSection.styled";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";
export const ContactSection = () => {
  return (
    <>
      
      <StyledContactSection id="contact">
        <SectionHeading>
          <h1>Contact</h1>
          <p>Get in Touch</p>
        </SectionHeading>
        <DetailsWrapper>
          <ContactInfo>
            <p>
              I'd love if you reached out to me. Even if it's just to say
              "Hey!". Don't hesitate! Drop me a line and I'll get back to you
              ASAP!
            </p>
            <div>
              <a href="sravani.vundavalli.se@gmail.com">
                <FaEnvelope />
                <span> sravani.vundavalli.se@gmail.com </span>
              </a>
              <a href="#">
                <FaLinkedin />
                <span> Linkedin </span>
              </a>
            </div>
            <ContactForm />
          </ContactInfo>
          <ImageWrapper>
            <img src="./images/contact_us.svg" alt="contact" />
          </ImageWrapper>
        </DetailsWrapper>
        
      </StyledContactSection>
      <hr/>
    </>
  );
};
