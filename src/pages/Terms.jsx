import React, { useState } from "react";
import styled from "styled-components";
import PageNav from "../components/PageNav";
import { useNavigate } from "react-router-dom";

const LoginMain = styled.main`
  padding: 2.5rem 5rem;
  background-color: var(--color-dark--1);
  height: 100%;
  .terms {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.4rem;
    }
    ul {
      margin-bottom: 20px;
    }
    ul li {
      font-size: 1.8rem;
      font-weight: 800;
      list-style: upper-roman;
      padding: 15px 0;
    }
  }
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
    color: white;
  }
`;

const Terms = () => {
  // PRE-FILL FOR DEV PURPOSES

  const navigate = useNavigate();

  return (
    <LoginMain>
      <PageNav />
      <div className="terms">
        <h2>Terms and Conditions</h2>
        <p>Last Updated: 08/09/23</p>

        <p>
          Welcome to SafeGarden, operated by SafeGarden. By accessing and using
          this website, you agree to comply with and be bound by the following
          terms of use. If you do not agree with these terms, please do not use
          this website.
        </p>
        <ul>
          <li> Acceptance of Terms</li>
          <p>
            By using this website, you acknowledge that you have read,
            understood, and agree to be bound by these Terms of Use and our
            Privacy Policy. These terms may be updated by SafeGarden from time
            to time, and it is your responsibility to review them periodically.
          </p>
          <li> Use of the Website</li>
          <p>
            2.1. You may use this website for lawful purposes only. 2.2. You
            agree not to use this website in any way that could damage, disable,
            overburden, or impair the site or interfere with the use of others.
            2.3. You agree not to use any automated means, such as bots or
            scripts, to access, collect, or disseminate data from this website
            without prior written permission from SafeGarden. 2.4. You agree not
            to engage in any unauthorized activities or actions that may violate
            any applicable laws or regulations
          </p>
          .<li> Intellectual</li>
          <p>
            Property 3.1. All content, text, graphics, logos, images, and other
            materials on this website are the property of SafeGarden or its
            licensors and are protected by copyright, trademark, and other
            intellectual property laws. 3.2. You are granted a limited,
            non-exclusive, non-transferable license to access and use the
            website for personal, non-commercial purposes only.
          </p>
          <li> User Content</li>
          <p>
            4.1. You may be able to submit or post user-generated content on the
            website. By doing so, you grant SafeGarden a non-exclusive,
            royalty-free, worldwide, perpetual, and irrevocable right to use,
            reproduce, modify, adapt, publish, translate, distribute, and
            display such content. 4.2. You are solely responsible for any
            content you submit, and you agree not to post any content that is
            illegal, obscene, defamatory, or infringes on the rights of others.
          </p>
          <li> Privacy</li>
          <p>
            5.1. Your use of this website is also governed by our Privacy
            Policy, which outlines how we collect, use, and protect your
            personal information.
          </p>
          <li> Disclaimers</li>
          <p>
            6.1. This website is provided "as is" without any warranties,
            express or implied. SafeGarden makes no representations or
            warranties regarding the accuracy, completeness, or reliability of
            the content on this website. 6.2. SafeGarden disclaims all liability
            for any damages arising out of or in connection with your use of
            this website.
          </p>
          <li> Limitation of</li>
          <p>
            {" "}
            Liability 7.1. To the fullest extent permitted by law, SafeGarden
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits or
            revenues, whether incurred directly or indirectly.
          </p>
          <li> Governing Law</li>
          <p>
            {" "}
            8.1. These Terms of Use shall be governed by and construed in
            accordance with the laws of SafeGarden. 9. Contact Information 9.1.
            If you have any questions or concerns about these Terms of Use, you
            may contact us at [Contact Information]. 10. Entire Agreement 10.1.
            These Terms of Use constitute the entire agreement between you and
            [Your Company] regarding your use of this website.
          </p>
        </ul>
        <LoginButton onClick={() => navigate("/register")}>
          Back to SignUp
        </LoginButton>
      </div>
    </LoginMain>
  );
};

export default Terms;
