import styled from "styled-components";
import React, { useContext } from "react";
import { LangContext } from "../../shared/LanguageContext";
import { Dropdown, ButtonToolbar } from "rsuite";
const Ul = styled.ul`

list-style: none;
  display: flex;
  text-align:left;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }

  @media (max-width: 1200px) {
  
    flex-flow: column nowrap;
    background-color: #383838;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
  
    }
  }
`;

const LeftNav = ({ open }) => {
  const [LangId, setLangId] = useContext(LangContext);

  return (
    <Ul open={open}>
      <li>
        {" "}
        {LangId === "fa" ? (
          <Dropdown title="فارسی" placement="RightStart">
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
          <Dropdown title="English" placement="RightStart">
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
          <a href="#contact" className="header-button">تماس با ما</a>
        ) : (
          <a href="#contact" className="header-button">contact us</a>
        )}
      </li>
      <li>
        {" "}
        {LangId === "fa" ? (
          <a href="https://blog.parhamkish.com/" className="header-button">بلاگ پرهام</a>
        ) : (
          <a href="https://blog.parhamkish.com/" className="header-button">Parham's blog</a>
        )}
      </li>
      <li>
        {" "}
        {LangId === "fa" ? (
          <a href="https://eclubgroup.ir/" className="header-button">ایکلاب </a>
        ) : (
          <a href="https://eclubgroup.ir/" className="header-button"> Eclub </a>
        )}
      </li>
      <li>
        {" "}
        {LangId === "fa" ? (
          <a href="#products" className="header-button">محصولات </a>
        ) : (
          <a href="#products" className="header-button"> products </a>
        )}
      </li>
      <li>
        {LangId === "fa" ? (
          <a href="#projects" className="header-button">پروژه ها</a>
        ) : (
          <a href="#projects" className="header-button">projects </a>
        )}
      </li>
      <li>
        {LangId === "fa" ? (
          <a href="#about" className="header-button" style={{ color: "#d0ad67" }}>
            درباره ما
          </a>
        ) : (
          <a href="#about" className="header-button" style={{ color: "#d0ad67" }}>
            about us{" "}
          </a>
        )}
      </li>
    </Ul>
  );
};

export default LeftNav;
