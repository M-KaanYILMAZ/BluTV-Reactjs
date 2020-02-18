import React, { Component } from "react";
import styled from "styled-components";

import Icon from "react-icons-kit";
import IconArrow from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";
import { arrowLeftLight } from "react-icons-kit/metrize/arrowLeftLight";
import { arrowRightLight } from "react-icons-kit/metrize/arrowRightLight";

class Comments extends Component {
  render() {
    return (
      <Comment className="container-fluid">
        <div className="row">
          <div className="col-12 d-block ">
            <div className="itemh4 d-flex">
              <h4 className="mt-5">En Çok Sevilen Canlı Yayın Kanallar</h4>

              <ol className="carousel-indicators ml-0 d-flex justify-content-end mt-5">
                <IconArrow
                  icon={arrowLeftLight}
                  size={30}
                  data-target="#blogCarousel"
                  data-slide-to="0"
                  className="active"
                  style={{ paddingRight: "1rem" }}
                />
                <IconArrow
                  icon={arrowRightLight}
                  size={30}
                  data-target="#blogCarousel"
                  data-slide-to="1"
                  className=""
                />
              </ol>
            </div>

            {/* Carousel Start */}

            <div className="carousel row m-3 p-3">
              <div className="col-md-12 ">
                <div
                  id="blogCarousel"
                  className="carousel slide "
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="commentitem p-3">
                            <span
                              className="starsitem"
                              style={{ width: "30%", height: "30%" }}
                            >
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                            </span>
                            <h6>Çok İyi</h6>
                            <h6>
                              Bezat Ç.'nin sıkı takipçisiyim. Amirime saygılar!
                            </h6>
                            <p>Ömer Faruk***</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="commentitem p-3">
                            <span
                              className="starsitem"
                              style={{ width: "30%", height: "30%" }}
                            >
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                            </span>
                            <h6>Muhteşem</h6>
                            <h6>
                              Sansürsüz altyzı&dublaj kalitesini çok sevdim!
                            </h6>
                            <p>Ayşegül Yurt***</p>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="commentitem p-3">
                            <span
                              className="starsitem"
                              style={{ width: "30%", height: "30%" }}
                            >
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                            </span>
                            <h6>İndirip izliyorum</h6>
                            <h6>
                              İndirme özelliği gelmiş!Neden söylemiyorsunuz?
                            </h6>
                            <p>Sarp Kal***</p>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="commentitem p-3">
                            <span
                              className="starsitem"
                              style={{ width: "30%", height: "30%" }}
                            >
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                            </span>
                            <h6>Başarılı</h6>
                            <h6>Smart TV2den izliyorum, tavsiye ederim.</h6>
                            <p>serkan Ay***</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="commentitem p-3">
                            <span
                              className="starsitem"
                              style={{ width: "30%", height: "30%" }}
                            >
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                            </span>
                            <h6>Başarılı</h6>
                            <h6>Smart TV2den izliyorum, tavsiye ederim.</h6>
                            <p>serkan Ay***</p>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="commentitem p-3">
                            <span
                              className="starsitem"
                              style={{ width: "30%", height: "30%" }}
                            >
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                            </span>
                            <h6>İndirip izliyorum</h6>
                            <h6>
                              İndirme özelliği gelmiş!Neden söylemiyorsunuz?
                            </h6>
                            <p>Sarp Kal***</p>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="commentitem p-3">
                            <span
                              className="starsitem"
                              style={{ width: "30%", height: "30%" }}
                            >
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                            </span>
                            <h6>Harika</h6>
                            <h6>İçerikler çok güzel.</h6>
                            <p>Naz Alp***</p>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="commentitem p-3">
                            <span
                              className="starsitem"
                              style={{ width: "30%", height: "30%" }}
                            >
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                              <Icon
                                icon={star}
                                size={25}
                                style={{ padding: "0.3rem" }}
                              />
                            </span>
                            <h6>Beğendim</h6>
                            <h6>Altyazı ve seslendirme harika!</h6>
                            <p>Sedat Öz***</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel End */}
          </div>
        </div>
      </Comment>
    );
  }
}

const Comment = styled.div`
  .itemh4 {
    margin-left: 1.5rem;
    padding-left: 1.5rem;
  }

  .commentitem {
    width: 100%;
    height: 100%;
    background: #2e2f41;
  }

  .commentitem h6 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1rem;
    overflow: hidden;
  }

  .commentitem p {
    font-size: 0.8rem;
    opacity: 50%;
  }

  .carousel-indicators {
    right: 0;
    top: 0;
    bottom: none;
    left: none;
    opacity: 70%;
  }

  .blog .carousel-indicators {
  }

  /* The colour of the indicators */
  .blog .carousel-indicators li {
    background: #a3a3a3;
    border-radius: 5rem;
    width: 1rem;
    height: 1rem;
  }

  .blog .carousel-indicators .active {
    background: #707070;
  }

  /////MEDIA////

  @media (max-width: 768px) {
    .carousel-item {
      position: relative;
      width: 200% !important;
      transition: none;
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

    .carousel-item {
      position: relative;
      width: 100% !important;
      height: 202px;
      transition: transform 0.6s ease-in-out;
    }

    .carousel-indicators {
      display: none !important;
    }
  }
`;

export default Comments;
