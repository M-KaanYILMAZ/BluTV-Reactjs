import React, { Component } from "react";
import styled from "styled-components";

class SignIn extends Component {
  /* Password and Icon Change */

  state = {
    isPasswordShown: false
  };

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  render() {
    const { isPasswordShown } = this.state;
    return (
      <Account>
        <form className="form-container">
          <h5>Türkiye'nin Reklamsız İnternet Televizyonu Ayda Sadece ₺19,90</h5>
          <div className="input-container">
            <input
              className="inputempty"
              type="text"
              placeholder="Ad Soyad"
              required
            />
          </div>
          <div className="input-container">
            <input
              className="inputempty"
              type="email"
              placeholder="E-posta Adresiniz"
              required
            />
          </div>
          <div className="input-container">
            <span className="icon">
              <i
                onClick={this.togglePasswordVisiblity}
                className={`far ${
                  isPasswordShown ? "fa-eye" : "far fa-eye-slash"
                } `}
              />
            </span>
            <input
              className="inputempty"
              type={isPasswordShown ? "text" : "password"}
              placeholder="Parola"
              required
            />
          </div>
          <div className="input-container">
            <button className="btnstyle" type="submit">
              Hemen Üye Ol
            </button>
          </div>
        </form>
        <div className="row">
          <form className="checkbox-form-container">
            <div className="checkbox-container">
              <input type="checkbox" defaultChecked />
              <span className="nda">
                <strong>İletişim izinlerini</strong> onaylıyorum. | Üyelik
                oluşturduğunuzda <strong>üyelik sözleşmesini</strong>
                okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
              </span>
            </div>
          </form>
        </div>
      </Account>
    );
  }
}

const Account = styled.div`
  width: 100%;
  padding: 20px 35px 5px 35px;
  margin-top: 1rem;
  position: relative;
  background: linear-gradient(
    94deg,
    rgba(60, 52, 107, 1),
    rgba(44, 72, 107, 1)
  );

  span.icon {
    display: flex;
    top: 32%;
    right: 19%;
    position: absolute;
    z-index: 2;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(-50%);
    cursor: pointer;
  }

  i {
    dispaly: inline-block;
    text-align: center;
    text-transform: none;
    vertical-align: 1.125em;
  }

  .form-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0.8rem;
    width: 100vw;
  }

  h5 {
    padding-right: 5%;
  }

  .checkbox-form-container {
    padding-bottom: 0.5rem;
    margin-left: 22%;
    align-self: center;
  }

  span.nda {
    margin-left: 0.5rem;
    font-size: 0.9rem;
  }

  .inputempty {
    color: #2e2e42 !important;
    background: #fff;
    border: solid 1px #1890ff;
    border-radius: 0.25rem;
    width: 100%;
    height: 2.8rem;
    padding: 0.5rem;
  }

  .inputempty::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.85rem;
    font-weight: 500;
    font-family: Work Sans;
  }

  button {
    width: 75%;
    padding-left: 2rem;
    color: #ffff !important;
    background: #56a4ff;
    border: solid 1px #56a4ff;
    border-radius: 0.25rem;
    height: 2.8rem;
    padding: 0 2.8rem 0;
    font-weight: 400;
    font-size: 0.85rem;
    cursor: pointer;
    text-align: center;
    font-family: Work Sans;
  }

  strong {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    h5 {
      font-size: 0.95rem;
      padding-right: 20%;
    }

    .form-container {
      display: grid;
      grid-template-columns: repeat(5);
      grid-gap: 0.3rem;
      width: auto;
    }

    span.icon {
      top: 30%;
      right: 24%;
    }

    button {
      width: 100%;
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default SignIn;
