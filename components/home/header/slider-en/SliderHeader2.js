import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideren.css";
import Butt2 from "./butt2.js";
import TextOnHeader1 from "../textOnHeader-en/TextOnHeader1";


export default class SliderHeader2 extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = { currSlide: 0 };
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      infinite: true,
      draggable: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      autoplay: true,
      touchThreshold: 1000,
      autoplaySpeed: 5000,
      afterChange: currSlide => this.setState({ currSlide: currSlide }),
    };

    
    return (
      <Fragment>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          
          <div style={{ width: "100%" }}>
            <img
              alt="sliderImage1"
              className="imgInSliderHead"
              src="https://s6.uupload.ir/files/slider-2-min_nlny.jpg"
              style={{ height: "90vh", width: "100%" }}
            />
            
              <TextOnHeader1
                title={"Obtaining travel and tourism services license"}
                description={""}
                slideID={0}
                currSlide={this.state.currSlide}
              />
          </div>
           <div>
            <img
              alt="sliderImage2"
              className="imgInSliderHead"
              src="https://s6.uupload.ir/files/slider-2-min_nlny.jpg"
              style={{ height: "90vh", width: "100%" }}
            />
              <TextOnHeader1
                title={
                  "Obtaining a knowledge-based certificate from the Scientific Vice President"
                }
                description={""}
                slideID={1}
                currSlide={this.state.currSlide}
              />
          </div>
          <div>
            <img
              alt="sliderImage3"
              className="imgInSliderHead"
              src="https://s6.uupload.ir/files/slider-2-min_nlny.jpg"
              style={{ height: "90vh", width: "100%" }}
            />
            
              <TextOnHeader1
                title={
                  "Obtaining a knowledge-based certificate from the Scientific Vice President"
                }
                description={""}
                slideID={2}
                currSlide={this.state.currSlide}
              />
          </div>
          <div>
            <img
              alt="sliderImage3"
              className="imgInSliderHead"
              src="https://s6.uupload.ir/files/slider-2-min_nlny.jpg"
              style={{ height: "90vh", width: "100%" }}
            />
            
              <TextOnHeader1
                title={"patent certificate"}
                description={""}
                slideID={3}
                currSlide={this.state.currSlide}
              />
          </div>
          <div>
            <img
              alt="sliderImage3"
              className="imgInSliderHead"
              src="https://s6.uupload.ir/files/slider-2-min_nlny.jpg"
              style={{ height: "90vh", width: "100%" }}
            />
            
              <TextOnHeader1
                title={"The best technology of 1401"}
                description={""}
                slideID={4}
                currSlide={this.state.currSlide}
              />
          </div> 
        </Slider>

        <Butt2 {...this} />
      </Fragment>
    );
  }
}
