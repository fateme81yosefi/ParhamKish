import React, { useContext, useState, useEffect } from "react";

import "./textOnHeader.css";
import { LangContext } from "../../../../shared/LanguageContext";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import MovingComponent from "react-moving-text";

export default function TextOnHeader() {
  const [LangId, setLangId] = useContext(LangContext);
  const [leftmarginer, setleftmarginer] = useState(8);
  const stylee = {
    direction: LangId === "fa" ? "rtl" : "ltr",
    textAlign: LangId === "fa" ? "right" : "left",
  };
  // const handleLeft0 = () => {
  // };
  useEffect(() => {
    window.addEventListener("resize", show);
    return () => {
      window.removeEventListener("resize", show);
    };
  }, []);

  const stylee1 = {
    direction: LangId === "fa" ? "rtl" : "ltr",
    textAlign: "justify"
  };

  const show = () => {
    if (window.innerWidth > 1100) {
      setleftmarginer(13);
    } else if (window.innerWidth > 1000) {
      setleftmarginer(9);
    } else if (window.innerWidth > 800) {
      setleftmarginer(12);
    } else if (window.innerWidth > 700) {
      setleftmarginer(20);
    } else if (window.innerWidth > 400) {
      setleftmarginer(8);
    }
  };

  const variants = {
    visible: {
      opacity: 1,
      left: `${leftmarginer}%`,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      left: "0",
      scale: 0.65,
    },
  };

  return (
    <motion.div
      className="textContainer"
    >
      {LangId === "fa" ? (
       <MovingComponent
       type="fadeInFromTop"
       duration="2s"
       delay="0s"
       direction="normal"
       timing="ease"
       iteration="1"
       fillMode="none">
          <h1 style={stylee} className="parhamTitle1">پرهام کیش</h1>
        </MovingComponent>
      ) : (
        <h1 style={stylee} className="">
          Parham Kish
        </h1>
      )}
      <MovingComponent
      type="fadeInFromLeft"
      duration="4s"
      delay="0s"
      direction="normal"
      timing="easeInOut"
      iteration="1"
      fillMode="none">
        <h2 style={stylee}>هلدینگ بین المللی پرهام کیش</h2>
        </MovingComponent>
     
          <MovingComponent
          type="fadeInFromBottom"
          duration="3s"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none">
           <p style={stylee1} className="paraInHead">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد.
        </p>
        </MovingComponent>
      
     
    </motion.div>
  );
}
