import React, { Component } from "react";
import Logo from "../logo/Logo";
import styled from "styled-components";

import SignIn from "../components/SignIn";

class Header extends Component {
  render() {
    return (
      <Headerstyle className="header-container">
        <div className="header-top">
          <Logostyle>
            <Logo />
            <span className="signin">Üye Girişi</span>
          </Logostyle>
          <SignIn />
        </div>
      </Headerstyle>
    );
  }
}

const Headerstyle = styled.div`
  background: #2e2f41;
`;

const Logostyle = styled.div`
  padding-top: 1em;
  margin-left: 5%;
  width: "auto";
  height: "auto";

  .signin {
    position: flex;
    float: right;
    padding-top: 0.5em;
    margin-right: 5%;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

export default Header;
