import React from "react";
import styled from "styled-components";
import PageNav from "../components/PageNav";

const ProductMain = styled.main`
  padding: 2.5rem 5rem;
  background-color: var(--color-dark--1);
  min-height: calc(100vh);
`;

const ProductSection = styled.section`
  width: clamp(80rem, 80%, 90rem);
  margin: 6rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7rem;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductTitle = styled.h2`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 3rem;
`;

const ProductParagraph = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

const ProductLink = styled.a`
  margin-top: 2rem;
  color: var(--color-brand--2);
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 600;
`;

export default function Product() {
  return (
    <ProductMain>
      <PageNav />
      <ProductSection>
        <ProductImage
          src="img-1.png"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <ProductTitle>About SafeGarden.</ProductTitle>
          <ProductParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </ProductParagraph>
          <ProductParagraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </ProductParagraph>
          <ProductLink href="/app">Learn More</ProductLink>
        </div>
      </ProductSection>
    </ProductMain>
  );
}
