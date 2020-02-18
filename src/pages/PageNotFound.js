import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import styled from "styled-components";

import Icon from "react-icons-kit";
import gif from "../images/video/ASK_I_MEMNU_45.mp4";
import { listAlt } from "react-icons-kit/fa/listAlt";

class PageNotFound extends Component {
  render() {
    return (
      <ErrorPage>
        <Headerstyle>
          <div className="header-top">
            <Logostyle>
              <Logo />
              <span className="signin">Üye Girişi</span>
            </Logostyle>
          </div>
        </Headerstyle>

        {/* Video */}

        <div className="playvideo">
          <div className="wrapper text-center">
            <Icon icon={listAlt} size={55} />
            <h2>Üzgünüz.. Aradığınız sayfayı bulamadık</h2>
            <Link to={"/"}>
              <strong>Ana sayfa</strong>
            </Link>
          </div>

          <video className="videoBG" autoPlay muted loop>
            <source src={gif} />
          </video>
        </div>
        {/* Footer */}
        <div className="col-md-12 footer-container p-2 ">
          <div className="footer-wrap">
            <Link className="footer-link">
              <div className="item">Kupon Kodu</div>
            </Link>
            <Link className="footer-link">
              <div className="item">Gizlilik Politikası</div>
            </Link>
            <Link className="footer-link">
              <div className="item">Aydınlatma İlkeleri</div>
            </Link>
            {/* Icons */}
            <Link className="footer-link">
              <div className="item d-flex align-items-center">
                <i className="fab fa-apple pr-2" />
                <div className="text">App Store</div>
              </div>
            </Link>
            <Link className="footer-link">
              <div className="item d-flex align-items-center">
                <i class="fab fa-google-play pr-2" />
                <div className="text">Google Play</div>
              </div>
            </Link>
            {/* Social Media */}
            <Link className="footer-link">
              <i className="fab fa-facebook-square" />
            </Link>

            <Link className="footer-link">
              <i className="fab fa-twitter-square" />
            </Link>

            <Link className="footer-link">
              <i className="fab fa-instagram-square" />
            </Link>

            <Link className="footer-link">
              <i className="fab fa-youtube" />
            </Link>
            {/* Social Media End */}
            {/* Icons End*/}
            <Link className="footer-link">
              <div className="item">Yardım Merkezi</div>
            </Link>
          </div>
        </div>
      </ErrorPage>
    );
  }
}

const ErrorPage = styled.div`
  height: 100vh;

  .playvideo {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(36, 38, 48, 0.7);

    position: relative;
    overflow: hidden;
    min-width: 100%;
    min-height: 100%;
  }

  .videoBG {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 100%;
    min-height: 100%;
  }

  .wrapper {
    line-height: 5rem;
  }

  ////FOOTER////

  .footer-link {
    color: #fff !important;
    opacity: 70%;
    padding-right: 0.8rem;
    &:hover {
      opacity: 100%;
      text-decoration: none;
    }
  }

  .item {
    padding-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  i {
    font-size: 0.9rem;
  }

  .text {
    padding-right: 0.4rem;
  }

  ////MEDIA/////

  @media screen and (max-width: 2560px) {
    .footer-link {
      display: inline-block;
      padding-right: 1rem;
    }
    .item {
      font-size: 1.2rem;
    }

    i {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    .footer-link {
      padding-right: 1rem;
      display: inline-block;
    }

    .item {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 430px) {
    .footer-link {
      display: inline-block;
      padding-right: 1.1rem;
    }
    .text {
      display: none;
    }

    .item {
      font-size: 0.8rem;
    }

    i {
      font-size: 0.8rem;
    }
  }
`;

const Headerstyle = styled.div`
  background: #2e2f41;
  padding-bottom: 1rem;
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
`;

export default PageNotFound;
