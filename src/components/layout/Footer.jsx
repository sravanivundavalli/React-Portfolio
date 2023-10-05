import React from "react";
import {
  StyledFooter,
  FooterNav,
  CodedWith,
} from "../styles/Layout/Footer.styled";

export const Footer = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <StyledFooter>
        <FooterNav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </FooterNav>
        <CodedWith>Coded With react And Styled Components</CodedWith>
        <div>
          {" "}
          &copy; March 2023 - {months[new Date().getMonth()]}{" "}
          {new Date().getFullYear()}
        </div>
      </StyledFooter>
    </>
  );
};
