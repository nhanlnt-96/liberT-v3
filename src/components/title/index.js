import "./Title.scss";
import React from "react";
import {Container} from "react-bootstrap";
import TitleImageTop from "../../assets/shapes/titleShape.svg";
import TitleImageBottom from "../../assets/imgs/title/titleBottom.svg";

const Title = ({title}) => {
  return (
    <Container className="title-container" fluid>
      <div className="title-top">
        <img className="title-image__item" src={TitleImageTop} alt=""/>
        <h4 className="title-text">{title}</h4>
      </div>
      <div className="title-bottom">
        <img className="title-image__item" src={TitleImageBottom} alt=""/>
      </div>
    </Container>
  );
};

export default Title;