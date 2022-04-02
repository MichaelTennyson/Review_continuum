import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footer_index.js";
  
function Footer(){
  return (
    <Box>
      <h1 style={{ color: "black", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Review continuum 
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Review continuum</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
            <FooterLink href="#">Future plans</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/ModuleReviewForm"> upload a Review</FooterLink>
            <FooterLink href="/review">view review</FooterLink>
            <FooterLink href="/Chat">chat</FooterLink>
            <FooterLink href="/searchPage">search</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://www.tudublin.ie/">Tudublin.ie</FooterLink>
            <FooterLink href="https://www.tudublin.ie/explore/our-campuses/grangegorman/">Grangegorman</FooterLink>
            <FooterLink href="#"> 0877111820</FooterLink>
            <FooterLink href="#">c18302166@mytudublin.ie</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.linkedin.com/feed/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  LinkedIn
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

export default Footer;