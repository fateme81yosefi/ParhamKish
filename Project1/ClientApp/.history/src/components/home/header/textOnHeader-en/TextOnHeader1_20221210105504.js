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
    render()
   }, [props.currSli]);

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


  cons

  return (

  );
}
