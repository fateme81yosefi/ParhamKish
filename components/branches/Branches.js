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
            <p className="headlitt" style={{marginBottom:"0"}}>
              دفاتر و شعب <span className="parhamColor">پرهام کیش</span>
            </p>
          ) : (
            <p className="headlitt" style={{marginBottom:"0"}}>
              
              <span className="parhamColor">Parham Kish</span> offices and branches{" "}
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
            <div className="col-xs-12 col-lg-4" style={{ display: "flex" }}>
              {LangId === "fa" ? (
                <span className="contant">+ ۹۸۲۱۸۸۲۴۰۰۰۶-۷  </span>
              ) : (
                <span className="contant EN-FONT" style={{ fontFamily: 'irSansWeb' }}>
                  982188240006-7+
                </span>
              )}
            </div>
            <div className="col-xs-12 col-lg-8">
              {LangId === "fa" ? (
                <span className="city teh">تهران:</span>
              ) : (
                <span className="city teh">Tehran:</span>
              )}

              {LangId === "fa" ? (
                <span className="address teh"> سعادت آباد، ساختمان اریکه ایرانیان</span>
              ) : (
                <span className="address teh"> Saadat Abad, Erice Iranian Building{" "}</span>

              )}
            </div>
          </div>
          <div className="rowArtificial" id="mashcont" style={styleeff}>
            <div className="col-xs-12 col-lg-4" style={{ display: "flex" }}>
              {LangId === "fa" ? (
                <span className="contant">+ ۹۸۵۱۳۷۱۳۱۴۱۶-۱۷  </span>
              ) : (
                <span className="contant EN-FONT" style={{ fontFamily: 'irSansWeb' }}>
                  985137131416-17+
                </span>
              )}
            </div>
            <div className="col-xs-12 col-lg-8">
              {LangId === "fa" ? (
                <span className="city mash" id="mashhad">
                  مشهد:
                </span>
              ) : (
                <span className="city mash" id="mashhadAddress">
                  Mashhad:
                </span>
              )}

              {LangId === "fa" ? ( 
                <span className="address mash"> خیابان سناباد، بلوار مجد، مجد۱، پلاک ۸{" "} </span>

              ) : (
                <span className="address mash"> Senabad St, Majd Blvd, Majd <span style={{ fontFamily: 'irSansWeb' }}>1</span>, No <span style={{ fontFamily: 'irSansWeb' }}>8 </span>{" "}</span>
              )}
            </div>
          </div>
          <div className="rowArtificial" id="kicont" style={styleeff}>
            <div className="col-xs-12 col-lg-4" style={{ display: "flex" }}>
              {LangId === "fa" ? (
                <span className="contant">+ ۹۸۷۶۴۴۴۷۰۱۵۲  </span>
              ) : (
                <span className="contant EN-FONT" style={{ fontFamily: 'irSansWeb' }}>
                  987644470152+
                </span>
              )}
            </div>
            <div className="col-xs-12 col-lg-8">
              {LangId === "fa" ? (
                <span className="city kish">کیش:</span>
              ) : (
                <span className="city kish">Kish:</span>
              )}

              {LangId === "fa" ? (
                <span className="address kish"> ساختمان مرکز نوآوری</span>
              ) : (
                <span className="address kish"> Noavari Center Building </span>
              )}
            </div>
          </div>

          <div className="rowArtificial rowArtificLast" id="qeshcont" style={styleeff}>
            <div className="col-xs-12 col-lg-4" style={{ display: "flex" }}>
              {LangId === "fa" ? (
                <span className="contant"> + ۹۸۷۶۳۵۲۱۸۰۸۴  </span>
              ) : (
                <span className="contant EN-FONT" style={{ fontFamily: 'irSansWeb' }}>
                  987635218084+
                </span>
              )}
            </div>
            <div className="col-xs-12 col-lg-8">
              {LangId === "fa" ? (
                <span className="city qesh" id="qeshm">
                  قشم:
                </span>
              ) : (
                <span className="city qesh" id="qeshmAddress">
                  Qeshm:
                </span>
              )}

              {LangId === "fa" ? (
                <span className="address kish"> مجتمع الماس ، واحد ۲۰۶</span>
              ) : (
                ((<span className="address kish"> Almas complex, unit<span style={{ fontFamily: 'irSansWeb' }}>206 </span> </span>)
                )
              )}
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}
