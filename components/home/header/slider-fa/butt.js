import React, { useContext } from "react";
import { CountContext } from "../../../../shared/LanguageContext";
import styled from "styled-components";

export default function Butt(props) {
  const [Count, setCount] = useContext(CountContext);

  const nextPage = () => {
    if (Count === 5) {
      setCount(1);
    } else setCount(Count + 1);
  };

  const prevPage = () => {
    if (Count === 1) {
      setCount(5);
    } else setCount(Count - 1);
  };

  const DIV = styled.div`
    .btnSlider {
      font-weight: 100 !important;
    }
    .btnSlider:hover {
      .prev-fa {
        margin-left: 13px !important;
      }
      .next-en {
        margin-right: 13px !important;
      }
    }
  `;
  return (
    <DIV className="contButtonSlider">
      <button
        className="btnSlider btnSliderFa"
        onClick={() => {
          prevPage();
          props.previous();
        }}
        style={{ marginLeft: "10px" }}
      >
        <span className="prev-fa">&#8594;</span>قبلی
      </button>

      <button
        className="btnSlider"
        onClick={() => {
          nextPage();
          props.next();
        }}
      >
        بعدی <span className="next-en">&#8592;</span>
      </button>
    </DIV>
  );
}
