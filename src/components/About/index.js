import "./About.scss";
import React from "react";
import {Container} from "react-bootstrap";
import Title from "../title";
import Divider from "../../assets/gifs/dividerLine.gif";
import Arrow from "../../assets/gifs/arrow.gif";
import Image from "../../assets/imgs/about/aboutImage.png";
import {aboutContent} from "../../configs/aboutContent";

const About = () => {
  return (
    <Container className="about" fluid>
      <Title title={"about"}/>
      <Container className="about-container" fluid={"xxl"}>
        <div className="about-sub__title">
          <p className="about-sub__title-text">Each Freedom Diamond is a unique original wholesale piece with a hand
            made ethical Moissanite diamond with individual serial number set in gold jewelry featuring the freedom dove
            engraved into the piece.</p>
          <img src={Divider} alt=""/>
        </div>
        <div className="about-content__top">
          {
            aboutContent.map((val, index) => (
              <>
                <div key={index} className="about-content__top__item">
                  <div className="about-content__top__item-arrow">
                    <img src={Arrow} alt=""/>
                  </div>
                  <h5 className="about-content__top__item-title">{val.title}</h5>
                  <div className="about-content__top__item-image">
                    <div className="about-content__top__item-image__border">
                      <img src={val.image} alt=""/>
                    </div>
                  </div>
                  <p className="about-content__top__item-text">{val.content}</p>
                </div>
              </>
            ))
          }
        </div>
        <div className="about-content__bottom">
          <div className="about-sub__title">
            <p className="about-sub__title-text">All net proceeds to building the Freedom Movement Also be a NFT
              card-holder and receive larger discounts on your freedom diamond jewelry purchase...</p>
            <img src={Divider} alt=""/>
          </div>
          <div className="about-content__bottom__container">
            <div className="about-content__bottom__image">
              <div className="about-content__bottom__image-border">
                <img src={Image} alt=""/>
              </div>
            </div>
            <div className="about-sub__title">
              <p className="about-sub__title-text">NFTs are built on the same kind of infrastructure – blockchain – that
                cryptocurrencies are. Because they use blockchain, the transfer of an interest in NFTs is recorded on
                the blockchain, putting ownership on a permanent record, making it impossible (or at least very hard) to
                falsify.</p>
              <img src={Divider} alt=""/>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default About;