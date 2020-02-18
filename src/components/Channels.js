import React, { Component } from "react";
import styled from "styled-components";

/* Channels Logos */
import logo1 from "../images/channels/kanald.png";
import logo2 from "../images/channels/startv.png";
import logo3 from "../images/channels/showtv.png";
import logo4 from "../images/channels/trt1.png";
import logo5 from "../images/channels/foxtv.png";
import logo6 from "../images/channels/blueaksiyon.png";
import logo7 from "../images/channels/bluekomedi.png";
import logo8 from "../images/channels/trtturk.png";

/* Show More Icon */
import Icon from "react-icons-kit";
import { iosArrowDown } from "react-icons-kit/ionicons/iosArrowDown";

class Channels extends Component {
  render() {
    return (
      <ChannelStyle className="container-fluid">
        <div className="row">
          <div className="col-12 d-block ">
            <div className="itemh4">
              <h4 className="mt-5">En Çok Sevilen Canlı Yayın Kanallar</h4>
            </div>
            <div className="grid-container m-4 pl-4 pr-4">
              <div className="item">
                <img src={logo1} style={{ width: 80, height: 80 }} />
              </div>

              <div className="item">
                <img src={logo2} style={{ width: 80, height: 80 }} />
              </div>

              <div className="item">
                <img src={logo3} style={{ width: 80, height: 80 }} />
              </div>

              <div className="item">
                <img src={logo4} style={{ width: 80, height: 80 }} />
              </div>

              <div className="item">
                <img src={logo5} style={{ width: 80, height: 80 }} />
              </div>

              <div className="item">
                <img src={logo6} style={{ width: 80, height: 80 }} />
              </div>

              <div className="item">
                <img src={logo7} style={{ width: 80, height: 80 }} />
              </div>

              <div className="item">
                <img src={logo8} style={{ width: 80, height: 80 }} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2 d-flex justify-content-center">
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
      </ChannelStyle>
    );
  }
}

const ChannelStyle = styled.div`
  display: block;
  justify-content: space-evenly;

  .grid-container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 1rem;
  }

  .itemh4 {
    margin-left: 1.5rem;
    padding-left: 1.4rem;
  }

  .item {
    text-align: center;
    background: #fff;
    border-radius: 0.3rem;
    padding: 1rem 1rem 1rem;
  }

  .showmore span {
    font-size: 1.17rem;
    font-weight: 400;
    cursor: pointer;
  }

  ////MEDIA////
  @media (max-width: 768px) {
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-gap: 1rem;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .itemh4 {
      margin-left: 1rem;
      padding-left: 0.8rem;
    }
  }

  @media (max-width: 425px) {
    .grid-container {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 1rem;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .itemh4 {
      margin-left: 0.9rem;
      padding-left: 0.5rem;
    }

    h4 {
      font-size: 1.3rem;
    }
  }
`;

export default Channels;
