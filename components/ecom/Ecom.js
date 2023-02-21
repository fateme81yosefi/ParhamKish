import React, { useContext, useEffect } from "react";
import { LangContext } from "../../shared/LanguageContext";
import { addScaleCorrector, motion, useAnimation } from "framer-motion";
import "./ecom.css";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

import { useInView } from "react-intersection-observer";
import { translateDOMPositionXY } from "rsuite/esm/DOMHelper";
export default function Ecom() {
  const [LangId, setLangId] = useContext(LangContext);

  const styleBoldText = {
    direction: LangId === "fa" ? "rtl" : "ltr",
    textAlign: LangId === "fa" ? "right" : "left",

    right : window.innerWidth > 1900 && LangId==="fa" ? LangId==="fa"?"12.5%" :{} :" 50px",
    left : window.innerWidth > 1900 &&  LangId==="en" ? LangId==="en"?"20%" :{} :" 50px",
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: {
      x: "10px",
      transition: { duration: 2 },
    },
    hidden: {
      x: "-50%",
    },
  };
  const imageEcom = {
    visible: {
      y: "-6%",
      // transform:"scale(1.1)",
      scale: 1.2,
      transition: { duration: 10 },
    },
    hidden: {
      y: "6%",
      // transform:"scale(1)",
      scale: 1.2,
    },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [inView]);

  return (
    <div className="containEcom" style={{ overflow: "hidden" }}>
      <div className="row editheight" style={{ overflow: "hidden" }}>
        <div className="container">
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="containTitlebigEcom containTitlebigEcomown"
            style={styleBoldText}
          >
            {LangId === "fa" ? <h1>پرهام کیش </h1> : <h1> Parham Kish </h1>}
          </motion.div>
        </div>
      </div>
      <div className="container containerEditMax">
        <div className="row titleAbout">
          <div className="col-4 lineall"></div>
          <div className="col-4 lineall"></div>
          <div className="col-4 lineall"></div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-5 col-xl-6 ecomDisplay ecomDisplayRight">
            <div className="maskEcom">
              <motion.div
                ref={ref}
                variants={imageEcom}
                initial="hidden"
                animate={control}
              >
                <img
                  alt="ecomImage"
                  src="https://s6.uupload.ir/files/ussd-pic-min_xsc.jpg"
                ></img>{" "}
              </motion.div>
            </div>
          </div>
          <div className="col-xs-12 col-md-7 col-xl-6 ecomDisplay ecomDisplayLeft">
            {LangId === "fa" ? (
              <span
                className="titleEcNum titleEcNumFa"
                style={{ fontFamily: "irSansWebBolder" }}
              >
                <b>
                  <strong>*۵۰۰*۸۸۸۸#</strong>{" "}
                </b>{" "}
              </span>
            ) : (
              <span
                className="titleEcNum titleEcNumen"
                style={{ fontFamily: "irSansWebBolder" }}
              >
                <b>*500*8888# </b>{" "}
              </span>
            )}
            <br></br>

            {LangId === "fa" ? (
              <span className="titleEcdesc titleEcdescFa" style={{direction:"rtl"}}>
                 با شماره گیری این کد، عضو خانواده پرهام شوید :)
              </span>
            ) : (
              <span className="titleEcdesc" >
                By dialing this code, become a member of the Ecom family ;)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
