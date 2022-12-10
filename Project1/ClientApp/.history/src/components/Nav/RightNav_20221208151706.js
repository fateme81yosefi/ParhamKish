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
          <Dropdown title="فارسی" placement="bottomEnd">
            <Dropdown.Item>فارسی</Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setLangId("en");
              }}
            >
              English
            </Dropdown.Item>
            <Dropdown.Item>عربی</Dropdown.Item>
          </Dropdown>
        ) : (
          <Dropdown title="English" placement="bottomEnd">
            <Dropdown.Item
              onClick={() => {
                setLangId("fa");
              }}
            >
              فارسی
            </Dropdown.Item>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>عربی</Dropdown.Item>
          </Dropdown>
        )}
      </li>

      <li>
        {" "}
        {LangId === "fa" ? (
          <button className="header-button">تماس با ما</button>
        ) : (
          <button className="header-button">contact us</button>
        )}
      </li>
      <li>
        {" "}
        {LangId === "fa" ? (
          <button className="header-button">بلاگ پرهام</button>
        ) : (
          <button className="header-button">Parham's blog</button>
        )}
      </li>
      <li>
        {" "}
        {LangId === "fa" ? (
          <button className="header-button">ایکلاب </button>
        ) : (
          <button className="header-button"> E </button>
        )}
      </li>
      <li>
        {" "}
        {LangId === "fa" ? (
          <button className="header-button">محصولات </button>
        ) : (
          <button className="header-button"> products </button>
        )}
      </li>
      <li>
        {LangId === "fa" ? (
          <button className="header-button">پروژه ها</button>
        ) : (
          <button className="header-button">projects </button>
        )}
      </li>
      <li>
        {LangId === "fa" ? (
          <button className="header-button" style={{ color: "#d0ad67" }}>
            درباره ما
          </button>
        ) : (
          <button className="header-button" style={{ color: "#d0ad67" }}>
            about us{" "}
          </button>
        )}
      </li>
    </Ul>
  );
};

export default LeftNav;
