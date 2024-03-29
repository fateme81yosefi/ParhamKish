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

  const deletepaddin = {
    paddingLeft: LangId === "en" && window.innerWidth > 992 ? "0" : "",
  };

  const styleBoldText = {
    direction: LangId === "fa" ? "rtl" : "ltr",
    textAlign: LangId === "fa" ? "right" : "left",

    right:
      window.innerWidth > 1900 && LangId === "fa"
        ? LangId === "fa"
          ? "12.5%"
          : {}
        : " 50px",
    left:
      window.innerWidth > 1900 && LangId === "en"
        ? LangId === "en"
          ? "20%"
          : {}
        : " 50px",
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
    <div
      className="containContact"
      id="contact"
      style={{ overflow: "hidden", marginTop: "-5%" }}
    >
      <div className="row">
        <div className="container">
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="containTitlebigEcom containTitlebigEcomcontact"
            style={styleBoldText}
          >
            {LangId === "fa" ? (
              <h1> تماس با ما </h1>
            ) : (
              <h1 className="en-big-title1">Contact Us</h1>
            )}
          </motion.div>
        </div>
      </div>
      <div className="container containerEditMax">
        <div className="row titleAbout">
          <div className="col-4 lineContact"></div>
          <div className="col-4 lineContact"></div>
          <div className="col-4 lineContact"></div>
          {LangId === "fa" ? (
            <p className="headlitt" style={{ margin: " 12% 0 8% 0% " }}>
              تماس با <span className="parhamColor">پرهام کیش</span>
            </p>
          ) : (
            <p className="headlitt enlittcontact">
              Contact <span className="parhamColor"> Parham Kish</span>
            </p>
          )}
        </div>
        <div className="cont row">
          <div className="contactUs col-xs-12 col-lg-4" style={deletepaddin}>
            {LangId === "fa" ? (
              <span style={styleef} className="contactUsFa">
                <h6 style={styleef} className="boldtxt">
                  تماس با ما :
                </h6>
                <p style={styleef} className="contactparagraph">
                  کاربران عزیز می‌توانند با استفاده از فرم ذیل و یا اطلاعات تماس
                  شرکت پرهام کیش، نظرات، انتقادات و پیشنهادات خود را بیان نموده
                  و ما را در جهت رسیدن به اهداف سایت یاری دهند :
                </p>
              </span>
            ) : (
              <span style={styleef} className="contactUsEn">
                <h6 style={styleef} className="boldtxt">
                  {" "}
                  Contact Us :
                </h6>
                <p style={styleef} className="contactparagraph">
                  Dear users, you can express your opinions, criticisms and
                  suggestions by using the form below or the contact information
                  of Parham Kish Company and help us to achive the goals of the
                  site:
                </p>
              </span>
            )}
          </div>
          <div className="row col-xs-12 col-lg-8 containInput">
            <div className="responsive-kadr">
              {LangId === "fa" ? (
                <div className="col-6-create paddingleftget pl0">
                  <input
                    type="text"
                    placeholder="نام خانوادگی"
                    style={styleef}
                  />
                </div>
              ) : (
                <div className="col-6-create paddingleftget2">
                  <input type="text" placeholder="Last Name " style={styleef} />
                </div>
              )}
              {LangId === "fa" ? (
                <div className="col-6-create paddingrightget pr2">
                  <input type="text" placeholder="نام " style={styleef} />
                </div>
              ) : (
                <div className="col-6-create paddingrightget2">
                  <input
                    type="text"
                    placeholder="First Name "
                    style={styleef}
                  />
                </div>
              )}
            </div>

            <div className="responsive-kadr">
              {LangId === "fa" ? (
                <div className="col-6-create paddingleftget pl0">
                  <input
                    type="email"
                    placeholder="پست الکترونیک "
                    style={styleef}
                  />
                </div>
              ) : (
                <div className="col-6-create paddingleftget2">
                  <input type="email" placeholder="Email  " style={styleef} />
                </div>
              )}
              {LangId === "fa" ? (
                <div className="col-6-create paddingrightget pr2">
                  <input
                    type="tel"
                    placeholder="موبایل *"
                    required
                    style={styleef}
                  />
                </div>
              ) : (
                <div className="col-6-create paddingrightget2">
                  <input
                    type="tel"
                    placeholder="Phone Number * "
                    required
                    style={styleef}
                  />
                </div>
              )}
            </div>

            <div className="responsive-kadr">
              {LangId === "fa" ? (
                <div className="col-12">
                  <textarea
                    type="text"
                    placeholder=" متن پیام*  "
                    required
                    style={styleef}
                    className="messageTxt"
                  />
                </div>
              ) : (
                <div className="col-12 col-12-create">
                  <textarea
                    required
                    type="text"
                    placeholder="Message *  "
                    style={styleef}
                    className="messageTxt"
                  />
                </div>
              )}
            </div>

            <div className="responsive-kadr">
              {LangId === "fa" ? (
                <button className="send sendFa">
                  <span style={{ marginRight: "10px" }}>←</span>ارسال پیام{" "}
                </button>
              ) : (
                <button className="send"> send Message</button>
              )}
            </div>
          </div>
          <div className="containInputSmall">
            {LangId === "fa" ? (
              <input type="text" placeholder="نام " style={styleef} />
            ) : (
              <input type="text" placeholder="First Name " style={styleef} />
            )}
            {LangId === "fa" ? (
              <input type="text" placeholder="نام خانوادگی" style={styleef} />
            ) : (
              <input type="text" placeholder="Last Name " style={styleef} />
            )}
            {LangId === "fa" ? (
              <input
                type="email"
                placeholder="پست الکترونیک "
                style={styleef}
              />
            ) : (
              <input type="email" placeholder="Email  " style={styleef} />
            )}
            {LangId === "fa" ? (
              <input
                type="tel"
                placeholder="موبایل *"
                required
                style={styleef}
              />
            ) : (
              <input
                type="tel"
                placeholder="Phone Number * "
                required
                style={styleef}
              />
            )}

            {LangId === "fa" ? (
              <textarea
                type="text"
                placeholder=" متن پیام*  "
                required
                style={styleef}
              />
            ) : (
              <textarea
                required
                type="text"
                placeholder="Message *  "
                style={styleef}
                className="messageTxt"
              />
            )}

            {LangId === "fa" ? (
              <button className="sendSmall">
                <span>←</span>ارسال پیام{" "}
              </button>
            ) : (
              <button className="sendSmall"> send Message</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
