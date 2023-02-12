import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SingleProduct(props) {
  const control = useAnimation();
  const [ref, inView] = useInView();




  const imageVarien = {
    visible: {
      y: "10px",
      transition: { duration: 1.7 },
      opacity: 1,
    },
    hidden: {
      y: "-80%",
      opacity: 0,
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
    <motion.img
      ref={ref}
      variants={imageVarien}
      initial="hidden"
      animate={control}
      className="imageProduct"
      alt={"product" + props.num}
      src={props.source}
    />
  );
}
