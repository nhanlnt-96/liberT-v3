import "./Banner.scss";
import React from "react";
import {Container} from "react-bootstrap";
import Header from "../Header";
import BgVideo from "../../assets/videos/banner/bgVideo.mp4";
import BannerImage1 from "../../assets/imgs/banner/img1.png";
import BannerImage2 from "../../assets/imgs/banner/img2.png";
import BannerImage3 from "../../assets/imgs/banner/img3.png";
import BannerImage4 from "../../assets/imgs/banner/img4.png";
import Divider from "../../assets/gifs/dividerLine.gif";

const Banner = () => {
  return (
    <Container fluid className="banner">
      <Header/>
      <div className="banner-video__bg">
        <video src={BgVideo} autoPlay={true} muted={true} loop={true}/>
      </div>
      <Container className="banner-container" fluid={"xxl"}>
        <div className="banner-content__header">
          {
            [BannerImage1, BannerImage2, BannerImage3].map((val, index) => (
              <div key={index} className="banner-image__item">
                <div className="banner-image__item-border">
                  <img src={val} alt=""/>
                </div>
              </div>
            ))
          }
        </div>
        <div className="banner-content__container">
          <div className="banner-content__top">
            <div className="banner-content__image">
              <div className="banner-image__item">
                <div className="banner-image__item-border">
                  <img src={BannerImage4} alt=""/>
                </div>
              </div>
            </div>
            <div className="banner-content__text">
              <h5 className="content-text">WE OPENED THE DOOR FOR CHANGE – HELP US HELP YOU! THE CANADA FREEDOM MOVEMENT
                WAS ESTABLISHED IN ALBERTA AUGUST 2020 WITH WALK FOR FREEDOM TO UNIT ALL PEOPLE STANDING FOR FREEDOM,
                BUILDING WORLD CLASS FREEDOM RALLIES WITH NATIONAL AND INTERNATIONAL SPEAKERS AND EXPERTS TO EDUCATE THE
                MAIN STREAM THAT SOON BECAME THE GLOBAL GOLD STANDARD FOR LARGE WEEKLY AND BI WEEKLY RALLIES, ADDING CAR
                AND TRUCK CARAVANS TO OUR RALLIES THAT EVENTUALLY INSPIRED THE OTTAWA TRUCKING CONVOYS IN 2022.</h5>
              <div className="banner-content__divider">
                <img src={Divider} alt=""/>
              </div>
            </div>
            <div className="banner-content__image">
              <div className="banner-image__item">
                <div className="banner-image__item-border">
                  <img src={BannerImage1} alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-content__bottom">
            <div className="banner-content__image">
              <div className="banner-image__item">
                <div className="banner-image__item-border">
                  <img src={BannerImage2} alt=""/>
                </div>
              </div>
            </div>
            <div className="banner-content__text">
              <h5 className="content-text">WE THE PEOPLE - TO CONTINUE TO BUILD A MOVEMENT COSTS MONEY TO ORGANIZE AND
                IMPLEMENT IDEAS AND LEGALLY PROTECT THE MOVEMENT.FREEDOM DIAMOND WERE CREATED TO SUPPORT THE FREEDOM
                MOVEMENT AND TO GIVE ALL INDIVIDUALS A CHANCE TO STAND UP AND SUPPORT FREEDOM.
              </h5>
              <div className="banner-content__divider">
                <img src={Divider} alt=""/>
              </div>
            </div>
            <div className="banner-content__image">
              <div className="banner-image__item">
                <div className="banner-image__item-border">
                  <img src={BannerImage3} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Banner;