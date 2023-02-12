import React, { useContext, useState, useEffect } from "react";

import { LangContext } from "../../../../shared/LanguageContext";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import MovingComponent from "react-moving-text";
import { Dropdown, ButtonToolbar } from "rsuite";
import "./textOnHeader.css";

export default function TextOnHeader(props) {
  const [LangId, setLangId] = useContext(LangContext);
  const [leftmarginer, setleftmarginer] = useState(8);
  const stylee = {
    direction: LangId === "fa" ? "rtl" : "ltr",
    textAlign: LangId === "fa" ? "right" : "left",
  };

  useEffect(() => {
    window.addEventListener("resize", show);
    return () => {
      window.removeEventListener("resize", show);
    };
  }, []);

  const stylee1 = {
    direction: LangId === "fa" ? "rtl" : "ltr",
    textAlign: "justify",
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
      // left: `${leftmarginer}%`,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      // left: "0",
      scale: 0.65,
    },
  };

  const render = () => {
    return (
      <>
        <motion.div className="textContainer">
          {/* {LangId === "fa" ? ( */}
          <div className="headerInLarger">
            <ul className="ulcollection">
              <li className="fa-drop-first">
                {" "}
                {LangId === "fa" ? (
                  <Dropdown
                    title="فارسی"
                    placement="bottomEnd"
                    className="fa-menue-ul"
                  >
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
                  <Dropdown title="English" placement="bottomEnd">
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
                    contact us
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
                    Parham's blog
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
                    products{" "}
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
                    projects{" "}
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
                    about us{" "}
                  </a>
                )}
              </li>
            </ul>

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
          </div>
          <div className="absoluting">
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
                <b>هلدینگ دانش بنیان</b>
              </p>
              <h1 style={stylee} className="parhamTitle1">
                {" "}
                <b> پرهام کیش</b>
              </h1>
            </MovingComponent>

            {props.currSlide === props.slideID && (
              <>
                <MovingComponent
                  type="fadeIn"
                  duration="4s"
                  delay="0s"
                  direction="normal"
                  timing="easeInOut"
                  iteration="1"
                  fillMode="none"
                >
                  <h2 className="spacebetween" style={stylee}>
                    {props.title}
                  </h2>
                </MovingComponent>

                <MovingComponent
                  type="fadeInFromBottom"
                  duration="3s"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <p style={stylee1} className="paraInHead">
                    {props.description}
                  </p>
                </MovingComponent>
              </>
            )}
          </div>
        </motion.div>
      </>
    );
  };

  return render();
}
