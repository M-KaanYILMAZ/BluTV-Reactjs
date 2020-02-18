import React, { Component } from "react";
import styled from "styled-components";

import Icon from "react-icons-kit";
import { arrowUpLight } from "react-icons-kit/metrize/arrowUpLight";
import { arrowDownLight } from "react-icons-kit/metrize/arrowDownLight";

class Questions extends Component {
  //Arrow Icon Change
  state = {
    isCollapseShown: false
  };

  changeArrowIcon = () => {
    const { isCollapseShown } = this.state;
    this.setState({ isCollapseShown: !isCollapseShown });
  };

  render() {
    const { isCollapseShown } = this.state;
    return (
      <Accordion className="container-fluid">
        <div className="accordion m-4" id="accordionExample">
          <div className="card">
            <button
              onClick={this.changeArrowIcon}
              className="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <p className=" d-flex float-left mb-0 p-3">BluTV Nedir?</p>
              <i
                className={`far ${
                  isCollapseShown
                    ? "fa-arrow-alt-circle-up"
                    : "fa-arrow-alt-circle-down"
                } `}
              />
            </button>

            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body ">
                <p>
                  {" "}
                  BluTV istediğiniz zaman, istediğiniz yerden, birbirinden
                  farklı dizi, film ve canlı yayını reklamsız izlemenizi
                  sağlayan, Doğan Holding çatısı altında kurulmuş bir dijital
                  televizyondur. İnternet bağlantısı ile bilgisayar, tablet,
                  mobil cihazlar ya da akıllı televizyonlar (Smart TV)*
                  üzerinden her ay güncellenen yerli/yabancı film ve dizilere,
                  canlı TV yayınına, spor, yaşam içeriklerine ve en önemlisi
                  sadece BluTV'de bulabileceğiniz BluTV üyelerine özel yerli
                  yapımlara kolayca ulaşabilirsiniz.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <button
              className="btn btn-link collapsed"
              onClick={this.changeArrowIcon}
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <p className=" d-flex float-left mb-0 p-3">
                BluTV'yi nasıl satın alabilirim?
              </p>
              <i
                className={`far ${
                  isCollapseShown
                    ? "fa-arrow-alt-circle-up"
                    : "fa-arrow-alt-circle-down"
                } `}
              />
            </button>

            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body ">
                <p>
                  {" "}
                  BluTV aboneliğinizi kredi/banka kartı bilgilerinizi sisteme
                  girerek başlatabilirsiniz. Apple ürünlerinde (iPhone, iPad,
                  AppleTV) uygulama içi satın alma (in-app purchase) seçeneği
                  bulunmaktadır.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <button
              className="btn btn-link collapsed"
              onClick={this.changeArrowIcon}
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <p className=" d-flex float-left mb-0 p-3">
                BluTV aboneliğine neler dahildir?
              </p>
              <i
                className={`far ${
                  isCollapseShown
                    ? "fa-arrow-alt-circle-up"
                    : "fa-arrow-alt-circle-down"
                } `}
              />
            </button>

            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>
                  BluTV, üyelerine istedikleri zaman, istedikleri yerden zengin
                  bir içeriğe ulaşabilme özgürlüğü sunar. Bilgisayar, cep
                  telefonu ve tablet gibi mobil cihazlar (iOS ve Android),
                  akıllı TV (Smart TV), Apple TV ve Android Box cihazları
                  üzerinden sürekli güncellenen içerikleri reklamsız sınırsız
                  dilediğiniz kadar izlemenizi sağlar.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <button
              className="btn btn-link collapsed"
              onClick={this.changeArrowIcon}
              type="button"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <p className=" d-flex float-left mb-0 p-3">Nasıl İptal Ederim?</p>
              <i
                className={`far ${
                  isCollapseShown
                    ? "fa-arrow-alt-circle-up"
                    : "fa-arrow-alt-circle-down"
                } `}
              />
            </button>

            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div className="card-body ">
                <p>
                  {" "}
                  Tek tuşla. BluTV'de taahhüt yoktur. Dilediğiniz an, hesabım
                  menüsü altından aboneliğinizi sonlandırabilirsiniz. İptal
                  etmeniz durumunda herhangi bir cayma bedeli ödemezsiniz.
                  Ödemesini yaptığınız dönemin sonunda aboneliğiniz durdurulur.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <button
              className="btn btn-link collapsed"
              onClick={this.changeArrowIcon}
              type="button"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <p className=" d-flex float-left mb-0 p-3">
                BluTV ile nasıl iletişime geçebilirim?
              </p>
              <i
                className={`far ${
                  isCollapseShown
                    ? "fa-arrow-alt-circle-up"
                    : "fa-arrow-alt-circle-down"
                } `}
              />
            </button>

            <div
              id="collapseFive"
              className="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordionExample"
            >
              <div className="card-body ">
                <p>
                  0850 210 52 58 iletişim numarasından veya
                  <span className="color-link">destek@blutv.com</span>
                  adresinden bizlere ulaşabilirsiniz.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <button className="btn btn-link collapsed">
              <p className="buttontext">
                Aradığınızı bulamadınız mı? Bir sorunuz var ise
                <span className="color-link"> Yardım Merkezini </span>
                ziyaret edin
              </p>
            </button>
          </div>
        </div>
      </Accordion>
    );
  }
}

const Accordion = styled.div`
.accordion{
  padding-left:1.5rem;
  padding-right;1.5rem;
}

  .card {
    background: #2e2f41;
  }

  .card-body {
    padding-left: 2rem;
    padding-right: 9rem;
    font-size: 1rem;
  }
  button {
    cursor: pointer;
    color: #fff;
    opacity: 90%;
    &:hover {
      opacity: 100%;
      color: #fff;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  i {
    color: #fff;
    float: right;
    margin-top: 0.8rem;
    font-size: 1.5rem;
    opacity: 80%;
  }

  .buttontext{
    float:left;
    padding: 1rem;
    text-align: justify;
    
  }

  .color-link {
    margin-left: 0.2rem;
    margin-right: 0.25rem;
    cursor: pointer;
    color: #56a4ff;
  }

  /////MEDIA/////
  @media (max-width: 768px) {


  }


  @media (max-width: 425px) {

    .accordion{
      padding-left:0rem;
      padding-right;0rem;
    }

.card-body{
  display: contents;
}

    p {
      font-size: 0.9rem;
      padding-left: 25px ;
      padding-right: 25px ;
  }

  .buttontext{
    display: inline;
    float: left;
    padding-left: 1rem;
    text-align: justify;
    
  }
`;

export default Questions;
