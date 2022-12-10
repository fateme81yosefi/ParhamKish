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

      // speed: 2000,
      autoplaySpeed: 5000,
    };
    return (
      <Fragment>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div style={{ width: "100%" }}>
            <img
              alt="sliderImage1"
              src="https://s6.uupload.ir/files/slider-2-min_nlny.jpg"
              style={{ height: "90vh", width: "100%" }}
            ></img>
            <TextOnHeader1 title={""} description={""} />
          </div>
          <div>
            <img
              alt="sliderImage2"
              src="https://s6.uupload.ir/files/slider-1-min_wwuk.jpg"
              style={{ height: "90vh", width: "100%" }}
            ></img>
            <TextOnHeader1 title={""} description={""} />
          </div>
          <div>
            <img
              alt="sliderImage3"
              src="https://s6.uupload.ir/files/slider-2-min_nlny.jpg"
              style={{ height: "90vh", width: "100%" }}
            ></img>
            <TextOnHeader1 title={""} description={} />
          </div>
          <div>
            <img
              alt="sliderImage3"
              src="https://s6.uupload.ir/files/slider-2-min_nlny.jpg"
              style={{ height: "90vh", width: "100%" }}
            ></img>
            <TextOnHeader1 title={} description={} />
          </div>
          <div>
            <img
              alt="sliderImage3"
              src="https://s6.uupload.ir/files/slider-2-min_nlny.jpg"
              style={{ height: "90vh", width: "100%" }}
            ></img>
            <TextOnHeader1 title={} description={} />
          </div>
        </Slider>

        <Butt2 {...this} />
      </Fragment>
    );
  }
}
