import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { LangContext } from "../../shared/LanguageContext";
import Burger from "./Burger";

const Navbarr = () => {
  const [LangId, setLangId] = useContext(LangContext);

  const contNav = {
    width: LangId === "fa" ? "" : "93%",
    overflow: "hidden",
  };

  const burgersty = {
    marginRight: LangId === "fa" ? "" : "-30px",
  };
  const imgLogoEn = {
    marginLeft: LangId === "en" ? "15%" : "",
  };
  return (
<div className="cont-Nav" style={contNav}>
      {LangId === "fa" ? (
        <img
          className="headerLogo"
          src="https://s6.uupload.ir/files/logo-header-min_zlq7.png"
        ></img>
      ) : (
        <img
          style={imgLogoEn}
          className="headerLogo"
          src="https://s6.uupload.ir/files/logo-en_35jm.png"
        ></img>
      )}

      <Burger style={burgersty} />
    </div>
  );
};

export default Navbarr;
