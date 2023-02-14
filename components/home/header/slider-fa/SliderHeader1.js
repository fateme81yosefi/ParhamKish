import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Butt from "./butt";
import TextOnHeader from "../textOnHeader-fa/TextOnHeader";
import "./slider.css";

export default class SliderHeader1 extends Component {
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
      afterChange: (currSlide) => this.setState({ currSlide: currSlide }),
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
            ></img>
            <TextOnHeader
              title={"اخذ مجوز خدمات مسافرتی و گردشگری(بند ب)"}
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
            ></img>
            <TextOnHeader
              title={"عضویت در بنیاد ملی نخبگان کشور"}
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
            ></img>
            <TextOnHeader
              title={"اخذ گواهی دانش بنیان از معاونت علمی ریاست جمهوری"}
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
            ></img>
            <TextOnHeader
              title={"گواهی ثبت اختراع"}
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
            ></img>
            <TextOnHeader
              title={"فناور برتر سال ۱۴۰۱"}
              description={""}
              slideID={4}
              currSlide={this.state.currSlide}
            />
          </div>  
        </Slider>

        <Butt {...this} />
      </Fragment>
    );
  }
}
