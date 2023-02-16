import React, { createContext, useState } from "react";
export const LangContext = createContext();

export const LangProvider = (props) => {
  const [LangId, setLangId] = useState("fa");

  return (
    <LangContext.Provider value={[LangId, setLangId]}>
      {props.children}
    </LangContext.Provider>
  );
};


export const CountContext = createContext();

export const CountProvider = (props) => {
  const [Count, setCount] = useState(1);

  return (
    <CountContext.Provider value={[Count, setCount]}>
      {props.children}
    </CountContext.Provider>
  );
};

