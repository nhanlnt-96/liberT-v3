import "./FirstBatch.scss";
import React from "react";
import Title from "../title";
import {Container} from "react-bootstrap";
import {firstBatchContent} from "../../configs/firstBatchContent";
import Divider from "../../assets/gifs/dividerLine.gif";

const FirstBatch = () => {
  return (
    <Container className="first-batch" fluid>
      <div className="bg-blur"/>
      <Title title={"Our first batch of NFTs this year will be"}/>
      <Container className="first-batch__container" fluid={"xxl"}>
        {
          firstBatchContent.map((val, index) => (
            <div key={index} className="first-batch__item">
              <p className="content">{val}</p>
            </div>
          ))
        }
        <p className="first-batch__sub__content">Our future roadmap includes plans to build a virtual store/marketplace
          where you will be able to navigate throughout to view and make purchases.</p>
        <img src={Divider} alt="" className="first-batch__divider"/>
      </Container>
    </Container>
  );
};

export default FirstBatch;