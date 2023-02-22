import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import About from "../about/About";
import Branches from "../branches/Branches";
import Contact from "../contact/Contact";
import Ecom from "../ecom/Ecom";
import Footer from "../footer/Footer";
import Products from "../products/Products";
import Projects from "../projects/Projects";
import TextOnHeader from "./header/textOnHeader-fa/TextOnHeader";
import TextOnHeader1 from "./header/textOnHeader-en/TextOnHeader1";
import { LangContext, CountContext } from "../../shared/LanguageContext";
import "./home.css";
import Navbarr from "../Nav/Navbarr";
import SliderHeader2 from "./header/slider-en/SliderHeader2";
import SliderHeader1 from "./header/slider-fa/SliderHeader1";
import { FaTelegramPlane } from "react-icons/fa";
import { Dropdown, ButtonToolbar } from "rsuite";
import EcomEn from "../ecom/EcomEn";

export default function HomeEn() {
  const [LangId, setLangId] = useContext(LangContext);
  const [Count, setCount] = useContext(CountContext);
  const [leftmarginer, setleftmarginer] = useState("");
  const [rightmarginer, setrightmarginer] = useState("");

  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setCount((x) => (x + 1 > 5 ? 1 : x + 1));
      // document.getElementById("totalnumslideId").classList.add("unFade");
      //     document.getElementById("totalnumslideId").classList.remove("fade");
    }, 5000);

    return () => {
      clearInterval(interval.current);
    };
  }, [Count]);

  const stylee = {
    direction: LangId === "fa" ? "ltr" : "rtl",
    textAlign: LangId === "fa" ? "justify" : "justify",
    background: "#2e2e2e",
  };

  const blackSty = {
    left: LangId === "fa" ? "" : "0",
  };

  const whitelineenSty = {
    marginTop: LangId === "en" ? "20vh" : "0",
  };

  const containBlackImageSty = {
    left: LangId === "en" ? leftmarginer : {},

    right: LangId === "fa" ? rightmarginer : {},

    // left: LangId === "en" && window.innerWidth>1200 && window.innerWidth<1600 ? "11vw" : {},

    transform: LangId === "en" ? "" : "",
  };
  const blackpSty = {
    marginTop: LangId === "en" ? "7rem" : {},
  };
  const containCountSty = {
    transform: LangId === "en" ? "rotate(-181deg)" : "",
    // fontFamily: "",
  };

  const containCounthSty = {
    fontFamily: "irSansWeb",
    marginRight: "10px",
  };

  return (
    <div style={stylee}>
      <div className="backgroundImageHeader">
        <div className="container" style={{ color: "red" }}>
          <div
            className="containBlackImage containBlackImageEn"
            style={containBlackImageSty}
          >
            <img
              className="blackbigax"
              alt="blackcounterback"
              src="https://s2.uupload.ir/files/top-icon_5ps0.png"
            ></img>

            <div className="containCount" style={containCountSty}>
              <div
                className="containerInCount"
                style={{ rotate: "180deg", marginLeft: "-23px" }}
              >
                <h1
                  className="totalnumslide"
                  id="totalnumslideId"
                  style={containCounthSty}
                >
                  0{Count}
                </h1>
                <h4 className="currslide" style={containCounthSty}>
                  05/
                </h4>
              </div>
            </div>
          </div>

          <div className="black" style={blackSty}>
            <p className="blackeng " style={blackpSty}>
              {" "}
              Parham Kish group of companies{" "}
            </p>

            <div
              className="whiteline whitelineen"
              style={{ marginRight: "50%" }}
            ></div>
            <div className="containImag ENcontainImage">
              <a>
                <svg
                  href="https://www.instagram.com/parhamkish.ir/"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a>
                <FaTelegramPlane />
              </a>
              <a href="https://www.instagram.com/parhamkish.ir/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <Navbarr />
        </div>

        <SliderHeader2 style={{ overflow: "hidden" }} />
      </div>
      <About />
      <Projects />
      <Products />
      {LangId === "en" ? <EcomEn /> : <Ecom />} <Branches />
      <Contact />
      <Footer />
    </div>
  );
}
