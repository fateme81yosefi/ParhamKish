import React, { useContext, useEffect, useState } from "react";

import "./textOnHeader1.css";
import { LangContext } from "../../../../shared/LanguageContext";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import MovingComponent from "react-moving-text";

export default function TextOnHeader1(props) {
  const [LangId, setLangId] = useContext(LangContext);
  const [leftmarginer, setleftmarginer] = useState(23);

  const stylee = {
    direction: LangId === "fa" ? "rtl" : "ltr",
    textAlign: LangId === "fa" ? "right" : "left",
  };

  const stylee1 = {
    direction: LangId === "fa" ? "rtl" : "ltr",
    textAlign: "justify",
  };

  useEffect(() => {
    window.addEventListener("resize", show);

    return () => {
      window.removeEventListener("resize", show);
    };
  }, []);

  useEffect(() => {
    props
  }, [props.slideID])

  // useEffect(() => {
  //   render();
  // }, [props]);

  const show = () => {
    if (window.innerWidth > 1300) setleftmarginer(30);
    else if (window.innerWidth > 1100) setleftmarginer(33);
    else if (window.innerWidth > 890) setleftmarginer(38);
    else if (window.innerWidth > 800) setleftmarginer(46);
    else if (window.innerWidth > 700) setleftmarginer(20);
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

  const render = () => {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 2.4, ease: "easeOut" }}
        variants={variants}
        className="textContainer1"
      >
 
        <MovingComponent
          type="fadeInFromTop"
          duration="2s"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <p style={stylee} className="parhamTitle1 spec">
            Knowledge based Holding
          </p>

          <h1 style={stylee} className="parhamTitle">
            Parham Kish
          </h1>
        </MovingComponent>

        <MovingComponent
          type="fadeInFromRight"
          duration="4s"
          delay="0s"
          direction="normal"
          timing="easeInOut"
          iteration="1"
          fillMode="none"
        >
          <h2 style={stylee}> {props.title}</h2>
        </MovingComponent>

        <MovingComponent
          type="fadeInFromBottom"
          duration="1600ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <p style={stylee1} className="paraInHead pahamenglitt">
            {props.description}
          </p>
        </MovingComponent>
      </motion.div>
    );
  };

  return render();
}
