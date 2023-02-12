import React, { useContext } from "react";
import HomeFa from "../src/components/home/HomeFa";
import { LangContext, CountContext } from "./shared/LanguageContext";

import "./App.css";
import { LangProvider, CountProvider } from "./shared/LanguageContext";
import HomeEn from "./components/home/HomeEn";
import HomeMain from "./components/HomeMain/HomeMain";

export default function App () {

  // const [LangId, setLangId] = useContext(LangContext);

    return (
      <CountProvider>
        <LangProvider>
          <HomeMain/>
          <a href="#" className="goTop">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>          </a>
        </LangProvider>
      </CountProvider>
    );
  }

