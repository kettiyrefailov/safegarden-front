import React from "react";
import styled from "styled-components";
import AppNav from "../components/AppNav";

const AppWrapper = styled.div`
  height: 100vh;
  padding: 2.4rem;
  overscroll-behavior-y: none;
  display: flex;
  position: relative;
`;

const AppLayout = () => {
  return (
    <AppWrapper>
      <AppNav />
      <p>App</p>
    </AppWrapper>
  );
};

export default AppLayout;
