import React, { useContext, useEffect, useState } from "react";
import "./contact.css";
import { LangContext } from "../../shared/LanguageContext";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [LangId, setLangId] = useContext(LangContext);
  const styleef = {
    direction: LangId === "fa" ? "rtl" : "ltr",
  };

  const styleSetEng = {
    padding:
      LangId === "en" && window.innerWidth > 500 && window.innerWidth < 992
        ? "0px"
        : "10px",
  };

  const styleBoldText = {
    direction: LangId === "fa" ? "rtl" : "ltr",
    textAlign: LangId === "fa" ? "right" : "left",
    right: LangId === "fa" ? "100px" : {},
    left: LangId === "en" ? "100px" : {},
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

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [inView]);
  return (
    <div className="containContact" style={{ overflow: "hidden" }}>
      <div className="row">
        <div className="container">
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="containTitlebigEcom"
            style={styleBoldText}
          >
            {LangId === "fa" ? <h1> تماس با ما </h1> : <h1>contact us</h1>}
          </motion.div>
        </div>
      </div>
      <div className="container">
        <div className="row titleAbout">
          <div className="col-4 lineContact"></div>
          <div className="col-4 lineContact"></div>
          <div className="col-4 lineContact"></div>
          {LangId === "fa" ? (
            <p>
              تماس با <span className="parhamColor">پرهام کیش</span>
            </p>
          ) : (
            <p>
              contact <span className="parhamColor">Parham Kish</span>
            </p>
          )}
        </div>
        <div className="cont row">
          <div className="contactUs col-xs-12 col-lg-4">
            {LangId === "fa" ? (
              <span style={styleef}>
                <h6 style={styleef}>تماس با ما:</h6>
                <p style={styleef}>
                  کاربران عزیز می‌توانند با استفاده از فرم ذیل و یا اطلاعات تماس
                  شرکت پرهام کیش، نظرات، انتقادات و پیشنهادات خود را بیان نموده
                  و ما را در جهت رسیدن به اهداف سایت یاری دهند
                </p>
              </span>
            ) : (
              <span style={styleef}>
                <h6 style={styleef}>: contact us </h6>
                <p style={styleef}>
                  Dear users, you can use the form below Or the contact
                  information of Parham Kish company, opinions, criticisms and
                  suggestions Express yourself and help us reach the goals of
                  the site
                </p>
              </span>
            )}
          </div>
          <div className="row col-xs-12 col-lg-8 containInput">
            <div className="responsive-kadr">
              {" "}
              {LangId === "fa" ? (
                <div className="col-6-create paddingleftget">
                  <input
                    type="text"
                    placeholder="نام خانوادگی"
                    style={styleef}
                  />
                </div>
              ) : (
                <div className="col-6-create paddingleftget">
                  <input type="text" placeholder="last name " />
                </div>
              )}
                {LangId === "fa" ? (
              <div className="col-6-create paddingrightget" style={styleSetEng}>
                  <input type="text" placeholder="نام " style={styleef} />
                ) : (
                  <input type="text" placeholder="Name " style={styleef} />
                )}
              </div>
            </div>
            <div className="col-6-create">
              {LangId === "fa" ? (
                <input
                  type="email"
                  placeholder="پست الکترونیک"
                  style={styleef}
                />
              ) : (
                <input type="email" placeholder="Email" style={styleef} />
              )}
            </div>

            <div className="col-6-create paddingrightget1">
              {LangId === "fa" ? (
                <input type="tel" placeholder="موبایل" style={styleef} />
              ) : (
                <input type="tel" placeholder="Mobile" style={styleef} />
              )}
            </div>
            <div className="col-12 col-12-create">
              {LangId === "fa" ? (
                <input
                  typr="text"
                  className="messageTxt"
                  placeholder="متن پیام"
                  style={styleef}
                />
              ) : (
                <input
                  typr="text"
                  className="messageTxt"
                  placeholder="Message text "
                  style={styleef}
                />
              )}
              {LangId === "fa" ? (
                <button className="send">← ارسال پیام</button>
              ) : (
                <button className="send">→ send Message</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
