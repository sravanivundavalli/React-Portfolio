import { FaBrain, FaCode, FaLaptop } from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  IconWrapper,
  ServicesItems,
  SingleService,
  StyledServicesSection,
} from "../styles/sections/ServicesSection.styled";

export const ServicesSection = () => {
  return (
    <>
      <StyledServicesSection id="services">
        <SectionHeading>
          <h1> Services</h1>
          <p>Excited to work with you</p>
        </SectionHeading>
        <ServicesItems>
          <SingleService>
            <IconWrapper>
              <FaCode />
            </IconWrapper>
            <h1>Web Development</h1>
            <p>
              I build and maintain the client-side of web applications,
              responsible for React and APIs.
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaLaptop />
            </IconWrapper>
            <h1>Design to HTML</h1>
            <p>
              {" "}
              I Can Convert Existing Designs into Pixel-Perfect HTML/CSS
              websites
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaBrain />
            </IconWrapper>
            <h1>Team Player</h1>
            <p>
              I can collaborate effectively, communicate openly, and share
              knowledge to achieve common goals.
            </p>
          </SingleService>
        </ServicesItems>
      </StyledServicesSection>
      <hr />
    </>
  );
};
export default ServicesSection;
