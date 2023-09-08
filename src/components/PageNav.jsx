import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const NavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-light--2);
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;

  &.active {
    color: var(--color-brand--2);
  }
`;

const CtaLink = styled(NavLink)`
  background-color: var(--color-brand--2);
  color: var(--color-dark--0);
  padding: 0.8rem 2rem;
  border-radius: 7px;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
`;

function PageNav() {
  return (
    <Nav>
      <Logo />
      <NavList>
        <NavItem>
          <StyledNavLink exact to="/product">
            Product
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink exact to="/contact-us">
            Contect Us
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <CtaLink to="/login">Login</CtaLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default PageNav;
