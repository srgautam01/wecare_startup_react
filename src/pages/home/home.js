import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item className="home-carousel-item">
            <img
              className="d-block w-100 h-20"
              src="https://thumbs.dreamstime.com/b/medicine-doctor-analysis-electronic-medical-record-interface-display-dna-digital-healthcare-network-connection-hologram-162019589.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Welcome to WeSave </h3>
              <p>
                Our mission is to detect cancer early when it is manageable.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="home-carousel-item">
            <img
              className="d-block w-100 h-20"
              src="https://thumbs.dreamstime.com/b/medical-science-scientific-research-abstract-backdrop-62195483.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Welcome to WeSave </h3>
              <p>
                Our mission is to detect cancer early when it is manageable.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="home-carousel-item">
            <img
              className="d-block w-100 h-20"
              src="https://thumbs.dreamstime.com/b/doctor-medical-assistant-robot-analysis-testing-result-dna-modern-virtual-interface-science-technology-innovative-future-163033177.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Welcome to WeSave </h3>
              <p>
                Our mission is to detect cancer early when it is manageable.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/*<div*/}
        {/*  id="carouselExampleSlidesOnly"*/}
        {/*  className="carousel slide"*/}
        {/*  data-bs-ride="carousel"*/}
        {/*>*/}
        {/*  <div className="carousel">*/}
        {/*    <div className="carousel-item active">*/}
        {/*      <img*/}
        {/*        src="https://images.unsplash.com/photo-1619612200694-69b4d3d13e4b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"*/}
        {/*        className="d-block w-100"*/}
        {/*        alt="image"*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*    <div className="carousel-item active">*/}
        {/*      <img src="" className="d-block w-100" />*/}
        {/*    </div>*/}
        {/*    <div className="carousel-item active">*/}
        {/*      <img src="" className="d-block w-100" />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="container">
          <h2 className="container" style={{ backgroundColor: "#7CFC00" }}>
            Welcome to WeSave
          </h2>
          <p className="content text-left">
            WeSave is an innovative medical device company for detecting cancer
            at early stage when it can be cured. It is spun out of University of
            New South Wales.
          </p>

          <p>
            <button type="button" className="btn btn-info text-center">
              {" "}
              more Info
            </button>
          </p>
          <p>
            <h2
              className="container text-left p-3"
              style={{ backgroundColor: "#7CFC00" }}
            >
              Why it matters?
            </h2>
            Most people lose lives because they realize about their cancer too
            late. Only few screening techniques are available for early cancer
            diagnosis. WeSave uses nanotechnology to detect microRNA to find
            about your cancer from regular blood test.
          </p>
        </div>
      </div>
    );
  }
}
