import React from "react";
import { FormContainer, LoginButton } from "./styled";
import { useNavigate } from "react-router-dom";

const FormsTeacher = () => {
  const navigate = useNavigate();
  return (
    <FormContainer>
      <h2>Kindergarten Tearch signup</h2>
      <div>
        <label>Name</label>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" placeholder="LastName" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" placeholder="LastName" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" placeholder="email" />
      </div>
      <div>
        <label>The name of the residence</label>
        <input type="text" placeholder="Residence" />
      </div>
      <div>
        <label>Adress Residence</label>
        <input type="text" placeholder="adress" />
      </div>
      <div>
        <label>Open Hours</label>
        <input type="time" placeholder="Open Hours" />
      </div>
      <div>
        <label>City of the residence</label>
        <input type="Text" placeholder="City of the residence" />
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

export default FormsTeacher;
