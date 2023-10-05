import { useState } from "react";
import {
  Nav,
  Logo,
  MenuIcon,
  NavList,
  LineThree,
  LineTwo,
  LineOne,
  NavItemStyled,
  NavLink,
  Profile,
  SocialIcons
} from "../styles/Layout/Nav.styled";
import { NavItems } from "../../data/NavItems";
import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import { CTAButton } from "../styles/common/CTAButton.styled";
import useScrollDirection from "../../hooks/useScrollDirection"

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection("down");
 
  return (
    <>
      <Nav scrollDirection = {scrollDirection} >
        <a href="#hero-section">
          <Logo>Sravani</Logo>
        </a>
        <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
                <NavItemStyled key = {index} index = {index} 
                menuOpen= {menuOpen} onClick = {() => setMenuOpen(false)}>

                    {navItem.isProfile ? (
                        <NavLink href = "#">
                         <Profile>
                            <img src= "./images/Sravani.png" alt="Sravani Vundavalli" ></img>
                            <span>Sravani Vundavalli</span>
                        </Profile>   
                        </NavLink>
                    ): null}
                    {navItem.text && (
                        <NavLink href = {navItem.href}>
                            {navItem.text}
                        </NavLink>
                    )}
                    {navItem.hasSocialIcons && (
                    <>
                    <SocialIcons>
                        <NavLink href="https://github.com/sravanivundavalli" target="_blank">
                        <FaGithub />
                      </NavLink>
                     <NavLink href="https://www.linkedin.com/in/sravanivundavalli/"
                        target="_blank">
                        <FaLinkedin />
                     </NavLink>   
                      <NavLink href="https://www.facebook.com/sravani.vundavalli.13"
                        target="_blank">
                        <FaFacebook />
                       </NavLink>
                        </SocialIcons> 
                        </>
                        )}
                        {navItem.hasCTA && (
                  <CTAButton href="mailto:sravani.vundavalli.se@gmail.com">
                    Email Me
                  </CTAButton>
                )}
              </NavItemStyled>
            ))}
        </NavList>
      </Nav>
    </>
  );
};
