import React, { Component } from "react";
import styled from "styled-components";

import img from "../images/devicepromo.png";

import Icon from "react-icons-kit";
import { iosArrowThinRight } from "react-icons-kit/ionicons/iosArrowThinRight";

/* AppStores Icons */
import Google from "../logo/googleplay";
import Appstore from "../logo/appstore";

/* Brands */
import logo1 from "../images/brands/samsung.png";
import logo2 from "../images/brands/vestel.png";
import logo3 from "../images/brands/lg.png";
import logo4 from "../images/brands/arcelik.png";
import logo5 from "../images/brands/androidtv.png";

class DevicePromo extends Component {
  render() {
    return (
      <Devicepromo className="container-fluid">
        <div className="row">
          <div className="col-12 d-block ">
            <div className="itemh4">
              <h4 className="mt-5">Dilediğin yerden, dilediğin zaman izle</h4>
            </div>
            <div className="device-promo mr-4 mt-4 ml-4 pl-4 pr-4">
              <div className="device-promo-content">
                <div className="device-promo-left">
                  <ul>
                    <li>Dizüstü ve masaüstü tüm bilgisayarlarda</li>
                    <li>
                      Tüm telefon ve tabletlerde, dilediğin içeriği indir & izle
                    </li>
                    <li>Akıllı televizyonlarda Apple TV'de</li>
                    <div className="itemexplore">
                      <span>Keşfet</span>
                      <Icon
                        icon={iosArrowThinRight}
                        size={35}
                        style={{
                          color: "#fff",
                          paddingLeft: "1rem"
                        }}
                      />
                    </div>
                  </ul>
                </div>
                <div className="device-promo-right">
                  <img src={img} style={{ width: 572 }} />
                </div>
              </div>

              <div className="device-promo-bottom d-flex align-items-center p-4">
                <div className="storelogos">
                  <div className="m-2">
                    <Google />
                  </div>
                  <div className="m-2">
                    <Appstore />
                  </div>
                </div>
                <div className="brands">
                  <img
                    src={logo1}
                    style={{ height: "1.2rem" }}
                    className="m-2"
                  />
                  <img
                    src={logo2}
                    style={{ height: "1.2rem" }}
                    className="m-2"
                  />
                  <img
                    src={logo3}
                    style={{ height: "1.2rem" }}
                    className="m-2"
                  />
                  <img
                    src={logo4}
                    style={{ height: "1.2rem" }}
                    className="m-2"
                  />
                  <img
                    src={logo5}
                    style={{ height: "1.2rem" }}
                    className="m-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Devicepromo>
    );
  }
}
const Devicepromo = styled.div`
  .device-promo-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(to right, #0f0e1e, #11151d);
    padding: 3rem 2.2rem 3.4rem;
  }

  .device-promo-right {
    justify-self: end;
    display: block;
    margin-top: -3.6rem;
  }

  .device-promo-left {
    display: flex;
    flex-direction: column;
  }

  .itemh4 {
    margin-left: 1.1rem;
    padding-left: 1rem;
  }

  ul {
    list-style: none;
    display: block;
    float: left;
  }

  li {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 3.5rem;
  }

  ul li:before {
    content: "✓";
    font-weight: 600;
    font-size: 1.5rem;
    margin-right: 0.3rem;
  }

  .device-promo-bottom {
    background: #2e2f41;
    display: flex;
    align-items: center;
  }

  .storelogos {
    display: flex;
  }

  /////MEDIA/////

  @media (max-width: 768px) {
    .device-promo-content {
      display: grid;
    }

    .device-promo-right img {
      width: 350px !important;
    }

    .device-promo-right {
      order: 1;
    }

    .device-promo-left {
      order: 2;
    }

    ul {
      margin-top: 1rem;
    }

    li {
      font-size: 1.1rem;
    }

    ul li:before {
      font-size: 1.3rem;
    }

    .itemexplore {
      margin-top: 2rem;
      font-size: 1.2rem;
    }

    .brands img {
      height: 0.7rem !important;
    }
  }

  @media (max-width: 425px) {
    .itemh4 {
      margin-left: 0.8rem;
      padding-left: 0.9rem;
    }
    h4 {
      font-size: 1.3rem;
    }

    .device-promo {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .device-promo-content {
      display: flex;
      align-items: center;
      padding: 3rem 2.2rem 3.4rem;
    }

    .device-promo-right {
      display: none;
    }

    .device-promo-left {
      display: block;
    }

    li {
      font-size: 0.9rem;
    }

    ul li:before {
      font-size: 0.9rem;
    }

    .device-promo-bottom {
      display: block !important;
    }

    .storelogos {
      display: inline-flex;
    }

    .brands img {
      height: 0.6rem !important;
    }
  }
`;

export default DevicePromo;
