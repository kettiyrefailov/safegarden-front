import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageNav from "../components/PageNav";

const HomeMain = styled.main`
  height: calc(100vh - 5rem);
  margin: 2.5rem;
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url("../background-1.png");
  background-size: cover;
  background-position: center;
  padding: 2.5rem 5rem;
`;

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 85%;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
`;

const HomeHeading1 = styled.h1`
  font-size: 4.5rem;
  line-height: 1.3;
`;

const HomeHeading2 = styled.h2`
  width: 90%;
  font-size: 1.9rem;
  color: var(--color-light--1);
  margin-bottom: 2.5rem;
`;

const CtaLink = styled(Link)`
  background-color: var(--color-brand--2);
  color: var(--color-dark--0);
  padding: 0.8rem 2rem;
  border-radius: 7px;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
`;

const Home = () => {
  return (
    <HomeMain>
      <PageNav />
      <HomeSection>
        <HomeHeading1>
          You can be calm with safegarden.
          <br />
          Best web app for daycare management.
        </HomeHeading1>
        <HomeHeading2>
          Welcome to our state-of-the-art daycare management website, crafted
          with meticulous planning and a vision to streamline and enhance
          daycare management. Our platform is designed to optimize every aspect
          of your daycare experience, ensuring a seamless and efficient journey
          for both kindergartners and parents alike.
        </HomeHeading2>
        <CtaLink to="/app">Let the fun begin</CtaLink>
      </HomeSection>
    </HomeMain>
  );
};

export default Home;
