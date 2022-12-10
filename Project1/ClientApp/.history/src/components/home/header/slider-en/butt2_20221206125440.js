import React, { useContext } from "react";
import { CountContext } from "../../../../shared/LanguageContext";
import styled from "styled-components";

export default function Butt2(props) {
  const [Count, setCount] = useContext(CountContext);

  const nextPage1 = () => {
    if (Count === 3) {
      setCount(1);
    } else setCount(Count + 1);
  };
  const prevPage1 = () => {
    if (Count === 1) {
      setCount(3);
    } else setCount(Count - 1);
  };

  const DIV = styled.div`
    .btnSlideren:hover {
      .prev-fa {
        margin-left:10px !important;

      }
      .next-en {
        margin-right: 10px !important;

      }
    }
  `;

  return (
    <DIV className="contButtonSlideren">
      <button
        className="btnSlideren"
        onClick={() => {
          prevPage1();
          props.previous();
        }}
        style={{ marginLeft: "20px" }}
      >
        {" "}
        ←Previous{" "}
        <span className="prev-fa">&#8594;</span>قبلی

      </button>
      <button
        className="btnSlideren"
        onClick={() => {
          nextPage1();

          props.next();
        }}
      >
        Next <span className="next-en">&#8592;</span>

      </button>
    </DIV>
  );
}
