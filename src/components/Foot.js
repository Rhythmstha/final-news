import React from 'react';
import styled from 'styled-components';
const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 20px 0;
  color: white;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin: 10px 0;
  a {
    color: #61dafb;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </FooterLinks>
      <p>&copy; {new Date().getFullYear()} Your News Website. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;