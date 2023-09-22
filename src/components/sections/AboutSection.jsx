import { CTAButton } from "../styles/common/CTAButton.styled";
import { ImageContainer, 
    StyleHeading, 
    StyledAboutSection, 
    StyledImage, 
    AboutContent, 
    GradientCircle, 
    DarkCircle, 
    StyledEmoji} from "../styles/sections/AboutSection.styled"

export const AboutSection = () =>{
    return (
        <>
    <StyledAboutSection id = "about" >
        <ImageContainer>
            <StyledImage src="./images/Sravani.png" alt="Sravani Vundavalli" />
            <DarkCircle/>
            <GradientCircle/>
        </ImageContainer>
        <AboutContent>
            <StyleHeading>
                Hello <StyledEmoji>👋</StyledEmoji>
            </StyleHeading>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consequuntur accusantium ab repellendus minima illo. 
                Praesentium, reprehenderit explicabo ratione accusamus, 
                ab distinctio minima sint iusto, 
                dolorum ipsa repellat soluta nihil fugiat!
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consequuntur accusantium ab repellendus minima illo. 
                Praesentium, reprehenderit explicabo ratione accusamus, 
                ab distinctio minima sint iusto, 
                dolorum ipsa repellat soluta nihil fugiat!
            </p>
            <CTAButton HREF = "#" target="_blank"> 
            Download Resume
            </CTAButton>
        </AboutContent>
    </StyledAboutSection>
    <hr/>
    </>
    );
};