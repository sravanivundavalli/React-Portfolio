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
          <a href="#projects">projects</a>
          <a href="#services">services</a>
          <a href="#contact">contact</a>
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
