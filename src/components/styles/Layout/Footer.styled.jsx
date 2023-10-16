import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 2.5rem;
  color: #7e91ae;
  text-align: center;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const FooterNav = styled.footer`
  a {
    margin-right: 0.5rem;
  }
  &:last-child {
    margin: 0;
  }
`;

export const CodedWith = styled.div`
  margin: 0.7rem 0;
`;
