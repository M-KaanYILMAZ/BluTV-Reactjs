import React, { Component } from "react";
import styled from "styled-components";

class Title extends Component {
  render() {
    return (
      <Titlestyle className="container-fluid title">
        <div>
          <h1>Türkiye'nin İnternet Televizyonu</h1>
        </div>

        <div>
          <p>Ayda sadece ₺19,90</p>
        </div>

        <div>
          <ul>
            <li>Yerli & Yabancı film ve diziler</li>
            <li>BluTV özel yapımları</li>
            <li>Altyazı & Dublaj ve HD kalitesiyle</li>
          </ul>
        </div>
      </Titlestyle>
    );
  }
}

const Titlestyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;
  background-color: #2196f3;
  padding: 1rem;
  justify-content: center;

  h1 {
    margin-top: 5rem;
    text-align: center;
    font-size: 3.85rem;
  }

  p {
    text-align: center;
    font-size: 1.38rem;
    margin-top: 1.1rem;
  }

  ul {
    display: grid;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-size: 1.1rem;
    line-height: 3rem;
    margin-bottom: 3rem;
  }

  ul li:before {
    content: "✓";
    font-weight: 600;
    font-size: 1.5rem;
    margin-right: 0.3rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export default Title;
