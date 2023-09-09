import React from "react";
import { FormContainer, LoginButton } from "./styled";
import { useNavigate } from "react-router-dom";

const FormParents = () => {
  const navigate = useNavigate();
  return (
    <FormContainer>
      <h2>Parents Signup</h2>
      <div>
        <label>Name</label>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" placeholder="LastName" />
      </div>
      <div>
        <label>Telefone</label>
        <input type="Number" placeholder="phone" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <label>Children Name</label>
        <input type="text" placeholder="Children Name" />
      </div>
      <div>
        <label>Children ID</label>
        <input type="text" placeholder="Children ID" />
      </div>
      <div>
        <label>Health Plans</label>
        <select>
          <option value="Maccabi">Maccabi</option>
          <option value="clalit">Clalit</option>
          <option value="meuhedet">Meuhedet</option>
        </select>
      </div>
      <div>
        <label>Allergic</label>
        <input type="text" placeholder="allergic" />
      </div>
      <div>
        <label>Residence Name</label>
        <input type="text" placeholder="Residence Name" />
      </div>
      <div className="buttonContainer">
        <div>
          <p>
            By clicking Sign Up, you agree to our
            <span className="terms" onClick={() => navigate("/Terms")}>
              Terms, Privacy Policy and Cookies Policy.
            </span>
            You may receive SMS Notifications from us and can opt out any time.
          </p>
        </div>
        <LoginButton onClick={() => navigate("/register")}>Sign Up</LoginButton>
      </div>
    </FormContainer>
  );
};

export default FormParents;
