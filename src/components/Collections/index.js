import "./Collections.scss";
import React from "react";
import Title from "../title";
import {Container} from "react-bootstrap";
import BannerImage1 from "../../assets/imgs/banner/img1.png";
import BannerImage2 from "../../assets/imgs/banner/img2.png";
import BannerImage3 from "../../assets/imgs/banner/img3.png";
import BannerImage4 from "../../assets/imgs/banner/img4.png";
import Tornado from "../../assets/imgs/collections/tornadoImage.gif";
import ImageBg from "../../assets/imgs/collections/collectionImageBg.png";

const Collections = () => {
  return (
    <Container className="collections" fluid>
      <div className="bg-blur"/>
      <Title title={"collections"}/>
      <Container className="collections-container" fluid={"xxl"}>
        {
          [BannerImage1, BannerImage2, BannerImage3, BannerImage4].map((val, index) => (
            <div key={index} className="collections-item">
              <div className="collections-item__image__container">
                <img src={ImageBg} alt="" className="collections-item__image__background"/>
                <img src={val} alt="" className="collections-item__image__item"/>
              </div>
              <img src={Tornado} alt="" className="collections-item__image__footer"/>
            </div>
          ))
        }
      </Container>
    </Container>
  );
};

export default Collections;