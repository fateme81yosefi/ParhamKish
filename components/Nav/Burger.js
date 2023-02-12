import React, { useState, useContext } from "react";
import styled from "styled-components";
import { LangContext } from "../../shared/LanguageContext";
import RightNav from "./RightNav";
import LeftNav from "./LeftNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  top: 0px;
  left: 0px;
  z-index: 23;


  display: none;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "white" : "white")};

    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  const [LangId, setLangId] = useContext(LangContext);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      {LangId === "fa" ? <LeftNav open={open} /> : <RightNav open={open} />}
    </>
  );
};

export default Burger;
