import "./footer.css";
import React, { useContext } from "react";
import { LangContext } from "../../shared/LanguageContext";

export default function Footer() {
  const [LangId, setLangId] = useContext(LangContext);

  const sty = {
    justifyContent: LangId === "fa" ? "left" : "right",
    direction:LangId === "fa" ? "rtl" : "ltr",
  };
 
  return (
    <div className="containFooter">
      <div className="container containerEditMax">
        {LangId === "fa" ? (
          <img src="https://s6.uupload.ir/files/logo-header-min_zlq7.png"></img>
        ) : (
          <img src="https://s6.uupload.ir/files/logo-en_35jm.png"></img>
        )}{" "}
        {LangId === "fa" ? (
          <span className="footerTxt" style={sty}>
            ۱۴۰۰ © کلیه حقوق مادی و معنوی این وب سایت متعلق به هلدینگ پرهام کیش
            می باشد.
          </span>
        ) : (
          <span className="footerTxt EN-FONT" style={sty}>
          ©2023 Parham Kish, All rights reserved
          </span>
        )}
      </div>
    </div>
  );
}
