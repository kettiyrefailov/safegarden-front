import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  background-color: var(--color-dark--2);
  border-radius: 7px;
`;

const NavItem = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.5rem 2rem;
  border-radius: 5px;
`;

const StyledNavLink = styled(NavItem)`
  &.active {
    background-color: var(--color-dark--0);
  }
`;

function AppNav() {
  return (
    <Nav>
      <NavList>
        <StyledNavLink exact to="/">
          Home
        </StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </NavList>
    </Nav>
  );
}

export default AppNav;
