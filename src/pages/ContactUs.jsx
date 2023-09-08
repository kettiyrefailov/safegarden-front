import styled from "styled-components";
import PageNav from "../components/PageNav";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import Row from "../components/Row";

const ContactMain = styled.main`
  margin: 2.5rem;
  padding: 2.5rem 5rem;
  background-color: var(--color-dark--1);
  min-height: calc(100vh - 5rem);
`;

const ContactSection = styled.section`
  width: clamp(80rem, 80%, 90rem);
  margin: 6rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7rem;
  align-items: center;
`;

const ContactImage = styled.img`
  width: 100%;
`;

const ContactTitle = styled.h2`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 3rem;
`;

const ContactParagraph = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

const ContactLink = styled.a`
  margin-top: 2rem;
  color: var(--color-brand--2);
  text-decoration: none;

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const ContactUs = () => {
  return (
    <ContactMain>
      <PageNav />
      <ContactSection>
        <ContactImage src="contact-us.png" alt="kid on the phone" />
        <div>
          <ContactTitle>Contact us!</ContactTitle>
          <ContactParagraph>
            <div>Join our community!</div>
            <div>
              100K+ users who are already enjoying peace of mind, and a more
              convenient and efficient user experience!
            </div>
            <div>It is important for us to hear your opinion!</div>
            <div>contact us on:</div>
          </ContactParagraph>
          <ContactParagraph>
            <div>Our Phone: 074-01010101</div>
            <div>Our Email: safegarden@gmail.com</div>
            <div>One of our staff members will contact you shortly.</div>
            <div>Follow us:</div>
          </ContactParagraph>
          <ContactLink
            href="https://www.linkedin.com/company/safegarden-daycare-managment/?viewAsMember=true"
            target="_blank"
          >
            <RiLinkedinBoxFill />
            <span> Linkedin</span>
          </ContactLink>
          <ContactLink href="https://twitter.com/" target="_blank">
            <FaTwitterSquare />
            <span> Twitter</span>
          </ContactLink>
          <ContactLink href="https://www.facebook.com/" target="_blank">
            <FaFacebookSquare />
            <span> Facebook</span>
          </ContactLink>
        </div>
      </ContactSection>
    </ContactMain>
  );
};

export default ContactUs;
