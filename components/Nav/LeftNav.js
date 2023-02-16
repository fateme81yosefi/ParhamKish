import React, { useContext } from "react";
import styled from "styled-components";
import { LangContext } from "../../shared/LanguageContext";
// import { Dropdown, ButtonToolbar } from "rsuite";
import "./nav.css";
import { translateDOMPositionXY } from "rsuite/esm/DOMHelper";
import { Dropdown, ButtonToolbar } from "rsuite";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-align: right;

  li {
    padding: 18px 10px;
    .rs-dropdown {
    }
  }
  .rs-dropdown-toggle {
    flex-direction: "reverse-row";
  }

  .rs-icon {
  }

  @media (max-width: 1200px) {
    flex-flow: column nowrap;
    background-color: #383838;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    top: 0;
    left: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 20;
    li {
      color: #fff;
      text-align: right;
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  const [LangId, setLangId] = useContext(LangContext);

  const RightSty = {
    left: LangId === "en" ? "0" : "",
  };

  return (
    <Ul open={open} style={RightSty} id="blackNav2">
      <li style={{ left: "5px" , position:"relative" }}>
        {" "}
        {LangId === "fa" ? (
          <Dropdown title="فارسی" 
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
          <Dropdown title="English"
          >
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
          <a
            href="#contact"
            className="header-button"
            onClick={() => {
              document.getElementById("blackNav2").style.display = "none";
            }}
          >
            تماس با ما
          </a>
        ) : (
          <a
            href="#contact"
            className="header-button"
            onClick={() => {
              document.getElementById("blackNav2").style.display = "none";
            }}
          >
            Contact Us
          </a>
        )}
      </li>
      <li>
        {" "}
        {LangId === "fa" ? (
          <a href="https://blog.parhamkish.com/" className="header-button">
            بلاگ پرهام
          </a>
        ) : (
          <a href="https://blog.parhamkish.com/" className="header-button">
            Parham's Blog
          </a>
        )}
      </li>
      <li>
        {" "}
        {LangId === "fa" ? (
          <a href="https://eclubgroup.ir/" className="header-button">
            {" "}
            ایکلاب
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
          <a
            href="#products"
            className="header-button"
            onClick={() => {
              setOpen(false);
            }}
          >
            محصولات{" "}
          </a>
        ) : (
          <a
            href="#products"
            className="header-button"
            onClick={() => {
              setOpen(false);
            }}
          >
            {" "}
            Products{" "}
          </a>
        )}
      </li>
      <li>
        {LangId === "fa" ? (
          <a
            href="#projects"
            className="header-button"
            onClick={() => {
              setOpen(false);
            }}
          >
            پروژه ها
          </a>
        ) : (
          <a
            href="#projects"
            className="header-button"
            onClick={() => {
              setOpen(false);
            }}
          >
            Projects{" "}
          </a>
        )}
      </li>
      <li>
        {LangId === "fa" ? (
          <a
            href="#about"
            className="header-button"
            style={{ color: "#d0ad67" }}
            onClick={() => {
              setOpen(false);
            }}
          >
            درباره ما
          </a>
        ) : (
          <a
            href="#about"
            className="header-button"
            style={{ color: "#d0ad67" }}
            onClick={() => {
              setOpen(false);
            }}
          >
            About Us{" "}
          </a>
        )}
      </li>
    </Ul>
  );
};

export default RightNav;
