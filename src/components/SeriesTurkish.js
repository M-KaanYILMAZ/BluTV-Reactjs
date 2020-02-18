import React, { Component } from "react";
import styled from "styled-components";

/* Images */
import Image1 from "../images/turkishseries/r1.png";
import Image2 from "../images/turkishseries/r2.png";
import Image3 from "../images/turkishseries/r3.png";
import Image4 from "../images/turkishseries/r4.png";

/* Serieses Logos */
import logo1 from "../images/logolar/behzatc.png";
import logo2 from "../images/logolar/pavyon.png";
import logo3 from "../images/logolar/masum.png";
import logo4 from "../images/logolar/bozkir.png";

import Icon from "react-icons-kit";
import { iosArrowThinRight } from "react-icons-kit/ionicons/iosArrowThinRight";
import { iosArrowDown } from "react-icons-kit/ionicons/iosArrowDown";

class SeriesTurkish extends Component {
  render() {
    return (
      <Series className="container-fluid">
        <div className="section col-12">
          <h4 className="mb-4">Özel Yapımlar ve Daha Fazlası</h4>
          <div className="grid-container">
            <div className="item">
              <img src={Image1} />
              <div className="itemlogo">
                <img src={logo1} />
                <p>Bir Ankara Polisiyesi.</p>
              </div>

              <div className="itemexplore">
                <span>Keşfet</span>
                <Icon
                  icon={iosArrowThinRight}
                  size={35}
                  style={{
                    color: "#fff",
                    paddingLeft: "0.2rem"
                  }}
                />
              </div>
            </div>

            <div className="item">
              <img src={Image2} />
              <div className="itemlogo">
                <img src={logo2} />
                <p>Konsomatrisler,müdavimler, alemciler,bolca neon ışık,...</p>
              </div>

              <div className="itemexplore">
                <span>Keşfet</span>
                <Icon
                  icon={iosArrowThinRight}
                  size={35}
                  style={{
                    color: "#fff",
                    paddingLeft: "0.2rem"
                  }}
                />
              </div>
            </div>

            <div className="item">
              <img src={Image3} />
              <div className="itemlogo">
                <img src={logo3} />
                <p>Berkun Oya'nın 'Bayrak' adlı oyunundan.</p>
              </div>

              <div className="itemexplore">
                <span>Keşfet</span>
                <Icon
                  icon={iosArrowThinRight}
                  size={35}
                  style={{
                    color: "#fff",
                    paddingLeft: "0.2rem"
                  }}
                />
              </div>
            </div>

            <div className="item">
              <img src={Image4} />
              <div className="itemlogo">
                <img src={logo4} />
                <p>Her katil, yaşadığı yere benzer.</p>
              </div>

              <div className="itemexplore">
                <span>Keşfet</span>
                <Icon
                  icon={iosArrowThinRight}
                  size={35}
                  style={{
                    color: "#fff",
                    paddingLeft: "0.2rem"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-5 d-flex justify-content-center">
          <div className="row">
            <div className="showmore">
              <span>Daha Fazlası</span>
              <Icon
                icon={iosArrowDown}
                size={25}
                style={{
                  color: "#fff",
                  paddingLeft: "0.5rem"
                }}
              />
            </div>
          </div>
        </div>
      </Series>
    );
  }
}

const Series = styled.div`
  padding: 1rem 3rem 3rem;

  h5 {
    font-family: Work Sans;
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  .grid-container {
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto auto auto;
    grid-gap: 1rem;
  }

  img {
    vertical-align: middle;
    width: 100%;
    border-radius: 0.2rem;
  }

  .item:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .itemlogo {
    position: absolute;
    bottom: 10rem;
    color: #fff;
    padding-left: 1rem;
    width: 13rem;
  }

  p {
    width: 18rem;
    position: absolute;
    color: #fff;
    padding-left: 0.2rem;
    padding-top: 1.6rem;
    opacity: 0.66;
    overflow: hidden;
    font-size: 1.2rem;
  }

  .itemexplore {
    position: absolute;
    bottom: 0;
    padding-bottom: 1.5rem;
    padding-left: 1.2rem;
    font-family: Work Sans;
    font-size: 1.4rem;
    font-weight: 600;
    align-items: center;
  }

  .showmore span {
    font-size: 1.17rem;
    font-weight: 400;
    cursor: pointer;
  }

  //////MEDIA//////

  @media (max-width: 1024px) {
    p {
      white-space: nowrap;
      width: 12rem;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 1em;
    }

    .itemlogo {
      position: absolute;
      bottom: 7rem;
      padding-left: 1rem;
      width: 9rem;
    }

    p {
      white-space: nowrap;
      width: 8.3rem;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 0.8rem;
    }

    .itemexplore {
      padding-left: 1.1rem;
      font-size: 0.9rem;
      font-weight: 600;
    }

    Icon {
      font-size: 10;
    }

    .showmore span {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 425px) {
    .grid-container {
      grid-template-columns: auto;
      grid-template-rows: 27rem 27rem 27rem 27rem;
      grid-row-gap: 0.1rem;
    }

    img {
      vertical-align: middle;
      width: 100%;
      border-radius: 0.2rem;
    }

    .itemlogo {
      position: relative;
      bottom: 12rem;
      vertical-align: middle;
      color: #fff;
      padding-left: 1rem;
      width: 13rem;
    }

    .itemexplore {
      position: relative;
      bottom: 7rem;
      padding-left: 1.2rem;
      font-family: Work Sans;
      font-size: 1.4rem;
      font-weight: 600;
      align-items: center;
    }

    p {
      white-space: nowrap;
      width: 15rem;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 1rem;
    }
  }
`;

export default SeriesTurkish;
