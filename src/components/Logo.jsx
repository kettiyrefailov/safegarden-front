import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 5.2rem;
`;

function Logo() {
  return (
    <LogoLink to="/">
      <LogoImage src="/logo.png" alt="SafeGarden" />
    </LogoLink>
  );
}

export default Logo;
