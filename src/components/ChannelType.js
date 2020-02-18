import React, { Component } from "react";
import styled from "styled-components";

class ChannelType extends Component {
  render() {
    return (
      <Channels className="container-fluid">
        <div className="row">
          <h4>BluTV'de daha fazlasını keşfet</h4>
          <div className="grid-container m-4 pl-5 pr-5 ">
            <div className="item  pl-4 pr-4 pb-2 pt-2">
              <span>Filmler</span>
            </div>
            <div className="item pl-4 pr-4 pb-2 pt-2">
              <span>Diziler</span>
            </div>
            <div className="item pl-4 pr-4 pb-2 pt-2">
              <span>Belgeseller</span>
            </div>
            <div className="item item4 pl-4 pr-4 pb-2 pt-2">
              <span>Canlı TV</span>
            </div>
            <div className="item item5 pl-4 pr-4 pb-2 pt-2">
              <span>Çocuk</span>
            </div>
          </div>
        </div>
      </Channels>
    );
  }
}

const Channels = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    width: 100vw;
  }

  h4{
    padding-left:2.5rem;
    margin-left:1.5rem;
  }

  .item {
    display: inline-block;
    border-radius: 3rem;
    color: #fff;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.15);
    font-size: 1rem;
    text-align: center;
  }

  ///////MEDIA///////

  @media (max-width: 768px){
    .grid-container {
      display:grid;
      grid-template-columns: auto;
      grid-gap: 1rem;
      width: 100vw;
      
      }

      h4{
        padding-left:3rem !important;
        }
  
      .item5{
        grid-column: 1 / span 2;
        grid-row: 3;
        }
  }


  @media (max-width: 425px){

  h4{
  padding-left:0.4rem !important;
  }

    .grid-container {
    display:grid;
    grid-template-columns: auto;
    grid-gap: 1rem;
    width: 100vw;
    padding-left: 0 !important;
    padding-right: 0 !important;
    }



    .item5{
    grid-column: 1 / span 2;
    grid-row: 3;
    }
`;

export default ChannelType;
