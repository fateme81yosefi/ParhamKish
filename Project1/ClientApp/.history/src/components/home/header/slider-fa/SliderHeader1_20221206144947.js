import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import Butt from "./butt";
import TextOnHeader from "../textOnHeader-fa/TextOnHeader";
export default class SliderHeader1 extends Component {
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
      touchThreshold: 1000,
      draggable: true,
      infinite: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      pauseOnHover: false,
      pauseOnFocus: false,
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
            <TextOnHeader title={"اخذ مجوز خدمات مسافرتی و گردشگری"} description={""} />
          </div>
          <div>
            <img
              alt="sliderImage2"
              src="https://s6.uupload.ir/files/slider-1-min_wwuk.jpg"
              style={{ height: "90vh", width: "100%" }}
            ></img>
            <TextOnHeader title={"عضویت در بنیاد ملی نخبگان کشور"} description={""} />
          </div>
          <div>
            <img
              alt="sliderImage3"
              src="https://s6.uupload.ir/files/slider-2-min_nlny.jpg"
              style={{ height: "90vh", width: "100%" }}
            ></img>
            <TextOnHeader title={"اخذ گواهی دانش بنیان از معاونت علمی ریاست جمهوری"} description={""} />
          </div>
          <div>
            <img
              alt="sliderImage3"
              src="https://s6.uupload.ir/files/slider-2-min_nlny.jpg"
              style={{ height: "90vh", width: "100%" }}
            ></img>
            <TextOnHeader title={"گواهی ثبت اختراع"}{""} description= />
          </div>
          <div>
            <img
              alt="sliderImage3"
              src="https://s6.uupload.ir/files/slider-2-min_nlny.jpg"
              style={{ height: "90vh", width: "100%" }}
            ></img>
            <TextOnHeader title={"فناور برتر سال 1401"} description={""} />
          </div>
        </Slider>

        <Butt {...this} />
      </Fragment>
    );
  }
}
