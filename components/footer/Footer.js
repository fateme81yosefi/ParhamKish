import "./footer.css";
import React, { useContext } from "react";
import { LangContext } from "../../shared/LanguageContext";

export default function Footer() {
  const [LangId, setLangId] = useContext(LangContext);

  const sty = {
    justifyContent: LangId === "fa" ? "end" : "start",
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
           . 2022 © All intellectual and material rights of this website belong
            to Parham Kish Holding
          </span>
        )}
      </div>
    </div>
  );
}
