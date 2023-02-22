import React, { useContext, useState } from "react";
import "./branches.css";
import { LangContext } from "../../shared/LanguageContext";

export default function Branches() {
  const [LangId, setLangId] = useContext(LangContext);

  const styleeff = {
    textAlign: LangId === "fa" ? "right" : "left",
    justifyContent: LangId === "fa" ? "space-between" : "space-between",
  };
  const stylee = {
    direction: LangId === "fa" ? "ltr" : "rtl",
  };
  const mouseOver = (e) => {
    if (e.target.id === "mash1") {
      document.getElementById("tehcont").style.opacity = 0.5;
      document.getElementById("qeshcont").style.opacity = 0.5;
      document.getElementById("kicont").style.opacity = 0.5;
      document.getElementById("mashcont").style.fontWeight = "500";
    } else if (e.target.id === "teh") {
      document.getElementById("mashcont").style.opacity = 0.5;
      document.getElementById("qeshcont").style.opacity = 0.5;
      document.getElementById("kicont").style.opacity = 0.5;
      document.getElementById("tehcont").style.fontWeight = "500";
    } else if (e.target.id === "kish") {
      document.getElementById("tehcont").style.opacity = 0.5;
      document.getElementById("qeshcont").style.opacity = 0.5;
      document.getElementById("mashcont").style.opacity = 0.5;
      document.getElementById("kicont").style.fontWeight = "500";
    } else if (e.target.id === "qeshm") {
      document.getElementById("tehcont").style.opacity = 0.5;
      document.getElementById("mashcont").style.opacity = 0.5;
      document.getElementById("kicont").style.opacity = 0.5;
      document.getElementById("qeshm").style.fontWeight = "500";
    }
  };

  const mouseLeave = (e) => {
    if (e.target.id === "mash1") {
      document.getElementById("tehcont").style.opacity = 1;
      document.getElementById("qeshcont").style.opacity = 1;
      document.getElementById("kicont").style.opacity = 1;
      document.getElementById("mashcont").style.fontWeight = "300";
    } else if (e.target.id === "teh") {
      document.getElementById("mashcont").style.opacity = 1;
      document.getElementById("qeshcont").style.opacity = 1;
      document.getElementById("kicont").style.opacity = 1;
      document.getElementById("tehcont").style.fontWeight = "300";
    } else if (e.target.id === "kish") {
      document.getElementById("tehcont").style.opacity = 1;
      document.getElementById("qeshcont").style.opacity = 1;
      document.getElementById("mashcont").style.opacity = 1;
      document.getElementById("kicont").style.fontWeight = "300";
    } else if (e.target.id === "qeshm") {
      document.getElementById("tehcont").style.opacity = 1;
      document.getElementById("kicont").style.opacity = 1;
      document.getElementById("mashcont").style.opacity = 1;
      document.getElementById("qeshm").style.fontWeight = "300";
    }
  };

  return (
    <div className="containBranch">
      <div className="container indir containerEditMax">
        <div className="row titleAbout">
          <div className="col-4 lineall linespe"></div>
          <div className="col-4 lineall linespe"></div>
          <div className="col-4 lineall linespe"></div>
          {LangId === "fa" ? (
            <p className="headlitt" style={{ marginBottom: "0" }}>
              دفاتر و شعب <span className="parhamColor">پرهام کیش</span>
            </p>
          ) : (
            <p className="headlitt" style={{ marginBottom: "0" }}>
              <span className="parhamColor">Parham Kish</span> offices and
              branches{" "}
            </p>
          )}
        </div>
        <div className="row contMap">
          <div className="iranDot">
            <div className="Dots">
              <img
                className="cityy city1"
                alt="mashhad"
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
                id="mash1"
                src="https://s6.uupload.ir/files/city_qo6q.png"
              />
              <img
                className="cityy city2"
                alt="tehran"
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
                id="teh"
                src="https://s6.uupload.ir/files/city_qo6q.png"
              />
              <img
                className="cityy city3"
                alt="kish"
                id="kish"
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
                src="https://s6.uupload.ir/files/city_qo6q.png"
              />
              <img
                className="cityy city4"
                alt="qeshm"
                id="qeshm"
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
                src="https://s6.uupload.ir/files/city_qo6q.png"
              />
            </div>
            <img
              className="irrr"
              alt="iranMap"
              src="https://s6.uupload.ir/files/iran-min_pmi.png"
            />
          </div>
          <img
            alt="worldMap"
            src="https://s6.uupload.ir/files/map-min_n0gp.png"
          />
        </div>

        <div className="infoAddress" style={stylee}>
          <div className="rowArtificial" id="tehcont" style={styleeff}>
            <div className="contNumberLine" style={{ display: "flex" }}>
              {LangId === "fa" ? (
                <span className="contant contantFa">
                  <span>+</span>
                  <span>۹</span>
                  <span>۸</span>
                  <span>۲</span>
                  <span>۱</span>
                  <span>۸</span>
                  <span>۸</span>
                  <span>۲</span>
                  <span>۴</span>
                  <span>۰</span>
                  <span>۰</span>
                  <span>۰</span>
                  <span>۶</span>
                  <span>-</span>
                  <span>۷</span>
                </span>
              ) : (
                <span
                  className="contant EN-FONT"
                  style={{ fontFamily: "irSansWeb" }}
                >
                  <span>+</span>
                  <span>9</span>
                  <span>8</span>
                  <span>2</span>
                  <span>1</span>
                  <span>8</span>
                  <span>8</span>
                  <span>2</span>
                  <span>4</span>
                  <span>0</span>
                  <span>0</span>
                  <span>0</span>
                  <span>6</span>
                  <span>-</span>
                  <span>7</span>
                </span>
              )}
            </div>
            <div className="contAddressLine">
              {LangId === "fa" ? (
                <span className="city teh boldtxt cityFa"> :تهران</span>
              ) : (
                <span className="city teh boldtxt"> :Tehran </span>
              )}

              {LangId === "fa" ? (
                <span className="address addressFa teh">
                  {" "}
                  <span>سعادت آباد</span>
                  <span>،</span>
                  <span> ساختمان </span>
                  <span> اریکه </span>
                  <span> ایرانیان</span>
                </span>
              ) : (
                <span className="address teh">
                  Arike Iranian bldg, Saadat Abad quarter, Tehran
                </span>
              )}
            </div>
          </div>

          <div className="rowArtificial" id="mashcont" style={styleeff}>
            <div className="contNumberLine" style={{ display: "flex" }}>
              {LangId === "fa" ? (
                <span className="contant contantFa">
                  <span>+</span>
                  <span>۹</span>
                  <span>۸</span>
                  <span>۵</span>
                  <span>۱</span>
                  <span>۳</span>
                  <span>۷</span>
                  <span>۱</span>
                  <span>۳</span>
                  <span>۱</span>
                  <span>۴</span>
                  <span>۱</span>
                  <span>۶</span>
                  <span>-</span>
                  <span>۱</span>
                  <span>۷</span>
                </span>
              ) : (
                <span
                  className="contant EN-FONT"
                  style={{ fontFamily: "irSansWeb" }}
                >
                  {" "}
                  <span>+</span>
                  <span>9</span>
                  <span>8</span>
                  <span>5</span>
                  <span>1</span>
                  <span>3</span>
                  <span>7</span>
                  <span>1</span>
                  <span>3</span>
                  <span>1</span>
                  <span>4</span>
                  <span>1</span>
                  <span>6</span>
                  <span>-</span>
                  <span>1</span>
                  <span>7</span>
                </span>
              )}
            </div>
            <div className="contAddressLine">
              {LangId === "fa" ? (
                <span className="city mash boldtxt cityFa" id="mashhad">
                  :مشهد
                </span>
              ) : (
                <span className="city mash boldtxt" id="mashhadAddress">
                  :Mashhad
                </span>
              )}

              {LangId === "fa" ? (
                <span className="address addressFa mash">
                  <span> خیابان</span>
                  <span> سناباد، </span>
                  <span>بلوار</span>
                  <span> مجد، </span>
                  <span>مجد</span>
                  <span>۱، </span>
                  <span>پلاک</span>
                  <span>۸</span>
                </span>
              ) : (
                <span className="address mash">
                  No. 8 , 1st Majd, Sanabad Ave. ,Mashhad
                </span>
              )}
            </div>
          </div>

          <div className="rowArtificial" id="kicont" style={styleeff}>
            <div className="contNumberLine" style={{ display: "flex" }}>
              {LangId === "fa" ? (
                <span className="contant contantFa">
                  <span>+</span>
                  <span>۹</span>
                  <span>۸</span>
                  <span>۷</span>
                  <span>۶</span>
                  <span>۴</span>
                  <span>۴</span>
                  <span>۴</span>
                  <span>۷</span>
                  <span>۰</span>
                  <span>۱</span>
                  <span>۵</span>
                  <span>۲</span>
                </span>
              ) : (
                <span
                  className="contant EN-FONT"
                  style={{ fontFamily: "irSansWeb" }}
                >
                  {" "}
                  <span>+</span>
                  <span>9</span>
                  <span>8</span>
                  <span>7</span>
                  <span>6</span>
                  <span>4</span>
                  <span>4</span>
                  <span>4</span>
                  <span>7</span>
                  <span>0</span>
                  <span>1</span>
                  <span>5</span>
                  <span>2</span>
                </span>
              )}
            </div>
            <div className="contAddressLine">
              {LangId === "fa" ? (
                <span className="city kish boldtxt cityFa"> :کیش </span>
              ) : (
                <span className="city kish boldtxt">:Kish</span>
              )}

              {LangId === "fa" ? (
                <span className="address addressFa kish">
                  <span> ساختمان </span>
                  <span>مرکز</span>
                  <span> نوآوری</span>
                </span>
              ) : (
                <span className="address kish">Noavari Complex , Kish</span>
              )}
            </div>
          </div>

          <div
            className="rowArtificial rowArtificLast"
            id="qeshcont"
            style={styleeff}
          >
            <div className="contNumberLine" style={{ display: "flex" }}>
              {LangId === "fa" ? (
                <span className="contant contantFa">
                  <span>+</span>
                  <span>۹</span>
                  <span>۸</span>
                  <span>۷</span>
                  <span>۶</span>
                  <span>۳</span>
                  <span>۵</span>
                  <span>۲</span>
                  <span>۱</span>
                  <span>۸</span>
                  <span>۰</span>
                  <span>۸</span>
                  <span>۴</span>
                </span>
              ) : (
                <span
                  className="contant EN-FONT"
                  style={{ fontFamily: "irSansWeb" }}
                >
                  {" "}
                  <span>+</span>
                  <span>9</span>
                  <span>8</span>
                  <span>7</span>
                  <span>6</span>
                  <span>3</span>
                  <span>5</span>
                  <span>2</span>
                  <span>1</span>
                  <span>8</span>
                  <span>0</span>
                  <span>8</span>
                  <span>4</span>
                </span>
              )}
            </div>
            <div className="contAddressLine">
              {LangId === "fa" ? (
                <span className="city qesh boldtxt cityFa" id="qeshm">
                  :قشم
                </span>
              ) : (
                <span className="city qesh boldtxt" id="qeshmAddress">
                  :Qeshm
                </span>
              )}

              {LangId === "fa" ? (
                <span className="address addressFa kish">
                  <span> مجتمع</span>
                  <span> الماس، </span>
                  <span> واحد</span>
                  <span> ۲۰۶</span>
                </span>
              ) : (
                <span className="address kish">
                  No. 206, Almas Complex, Qeshm
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
