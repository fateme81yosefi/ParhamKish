import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "rsuite";

import "./textOnHeader1.css";
import { LangContext } from "../../../../shared/LanguageContext";
import { motion } from "framer-motion";
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
      <motion.div className="textContainer1">
        <div className="headerInLarger headerInLargeren">
          {LangId === "fa" ? (
            <img
              className="headerLogo"
              alt="logoim"
              src="https://s6.uupload.ir/files/logo-header-min_zlq7.png"
            ></img>
          ) : (
            <img
              className="headerLogo"
              alt="logoim"
              src="https://s6.uupload.ir/files/logo-en_35jm.png"
            ></img>
          )}
          <ul className="ulcollection ulcollectionEn">
            <li
              className="en-drop-first"
              style={{ marginLeft: "-17px !important" }}
            >
              {" "}
              {LangId === "fa" ? (
                <Dropdown title="فارسی" placement="bottomEnd">
                  <Dropdown.Item>فارسی</Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setLangId("en");
                    }}
                  >
                    English
                  </Dropdown.Item>
                </Dropdown>
              ) : (
                <Dropdown title="English" className="en-menue-ul">
                  <Dropdown.Item
                    onClick={() => {
                      setLangId("fa");
                    }}
                  >
                    فارسی
                  </Dropdown.Item>
                  <Dropdown.Item>English</Dropdown.Item>
                </Dropdown>
              )}
            </li>

            <li>
              {" "}
              {LangId === "fa" ? (
                <a href="#contact" className="header-button">
                  تماس با ما
                </a>
              ) : (
                <a href="#contact" className="header-button">
                  Contact Us
                </a>
              )}
            </li>
            <li>
              {" "}
              {LangId === "fa" ? (
                <a
                  href="https://blog.parhamkish.com/"
                  className="header-button"
                >
                  بلاگ پرهام
                </a>
              ) : (
                <a
                  href="https://blog.parhamkish.com/"
                  className="header-button"
                >
                  Parham's Blog
                </a>
              )}
            </li>
            <li>
              {" "}
              {LangId === "fa" ? (
                <a href="https://eclubgroup.ir/" className="header-button">
                  ایکلاب{" "}
                </a>
              ) : (
                <a href="https://eclubgroup.ir/" className="header-button">
                  {" "}
                  Eclub{" "}
                </a>
              )}
            </li>
            <li>
              {" "}
              {LangId === "fa" ? (
                <a href="#products" className="header-button">
                  محصولات{" "}
                </a>
              ) : (
                <a href="#products" className="header-button">
                  {" "}
                  Products{" "}
                </a>
              )}
            </li>
            <li>
              {LangId === "fa" ? (
                <a href="#projects" className="header-button">
                  پروژه ها
                </a>
              ) : (
                <a href="#projects" className="header-button">
                  Projects{" "}
                </a>
              )}
            </li>
            <li>
              {LangId === "fa" ? (
                <a
                  href="#about"
                  className="header-button"
                  style={{ color: "#d0ad67" }}
                >
                  درباره ما
                </a>
              ) : (
                <a
                  href="#about"
                  className="header-button"
                  style={{ color: "#d0ad67" }}
                >
                  About Us{" "}
                </a>
              )}
            </li>
          </ul>
        </div>
        <MovingComponent
          type="fadeInFromTop"
          duration="2s"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <p style={stylee} className="parhamTitle1 spec spec1">
            <b>Knowledge based Holding</b>
          </p>

          <h1 style={stylee} className="parhamTitle">
            <b>Parham Kish</b>
          </h1>
        </MovingComponent>

        {props.currSlide === props.slideID && (
          <>
            <MovingComponent
              type="fadeIn"
              duration="2s"
              delay="0s"
              direction="normal"
              timing="easeInOut"
              iteration="1"
              fillMode="none"
            >
              <b>
                <h2 className="spacebetween EN-FONT" style={stylee}>
                  {" "}
                  {props.title}
                </h2>
              </b>
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
              <p style={stylee1} className="paraInHead pahamenglitt EN-FONT">
                <b>{props.description}</b>
              </p>
            </MovingComponent>
          </>
        )}
      </motion.div>
    );
  };

  return render();
}
