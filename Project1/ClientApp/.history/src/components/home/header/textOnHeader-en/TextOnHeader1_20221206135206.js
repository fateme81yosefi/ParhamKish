import React, { useContext, useEffect, useState } from "react";

import "./textOnHeader1.css";
import { LangContext } from "../../../../shared/LanguageContext";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import MovingComponent from "react-moving-text";

export default function TextOnHeader1() {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 2.4, ease: "easeOut" }}
      variants={variants}
      className="textContainer1"
    >
      {LangId === "fa" ? (
        <h1 style={stylee}>هلدینکپرهام کیش</h1>
      ) : (
        ((
          <h1 style={stylee} className="">
            Parham Kish
          </h1>
        ),
        (
          <MovingComponent
            type="fadeInFromTop"
            duration="2s"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <h1 style={stylee} className="parhamTitle">
              Parham Kish
            </h1>
          </MovingComponent>
        ))
      )}

      <MovingComponent
        type="fadeInFromRight"
        duration="4s"
        delay="0s"
        direction="normal"
        timing="easeInOut"
        iteration="1"
        fillMode="none"
      >
        <h2 style={stylee}> Parham Kish Knowledge base Holding </h2>
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
          Lorem Ipsum fabricated text by producing incomprehensible simplicity
          from the printing industry, and with The use of graphic designers,
          printers and texts, but also newspapers and magazines Column and row
          as necessary, and for the current conditions of technology required,
          and Various applications are aimed at improving practical tools, many
          books In sixty-three percent of the past, present and future, the
          community and experts know a lot a demander
        </p>
      </MovingComponent>
    </motion.div>
  );
}
