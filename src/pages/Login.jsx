import React, { useState } from "react";
import styled from "styled-components";
import PageNav from "../components/PageNav";
import { useNavigate } from "react-router-dom";

const LoginMain = styled.main`
  padding: 2.5rem 5rem;
  background-color: var(--color-dark--1);
  height: 100vh;
`;

const LoginForm = styled.form`
  background-color: var(--color-dark--2);
  border-radius: 7px;
  padding: 2rem 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  /* Different from other form */
  width: 48rem;
  margin: 8rem auto;

  .buttonContainer {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--color-light--1);
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid var(--color-light--2);
  background-color: var(--color-dark--3);
  color: var(--color-light--1);
`;

const LoginButton = styled.button`
  background-color: var(--color-brand--2);
  color: var(--color-dark--0);
  padding: 0.8rem 2rem;
  border-radius: 7px;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  cursor: pointer;
  min-width: 200px;
  &:hover {
    background-color: var(--color-brand--3);
  }
`;

const Login = () => {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const navigate = useNavigate();

  return (
    <LoginMain>
      <PageNav />
      <LoginForm>
        <FormRow>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormRow>

        <div className="buttonContainer">
          <LoginButton>Login</LoginButton>
          <LoginButton onClick={() => navigate("/register")}>
            Register
          </LoginButton>
        </div>
      </LoginForm>
    </LoginMain>
  );
};

export default Login;
