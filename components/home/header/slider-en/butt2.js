import React, { useContext } from "react";
import { CountContext } from "../../../../shared/LanguageContext";
import styled from "styled-components";

export default function Butt2(props) {
  const [Count, setCount] = useContext(CountContext);

  const nextPage1 = () => {
    if (Count === 5) {
      setCount(1);
    } else setCount(Count + 1);
  };
  const prevPage1 = () => {
    if (Count === 1) {
      setCount(5);
    } else setCount(Count - 1);
  };

  const DIV = styled.div`
  .btnSlideren{
    font-weight:100 !important;
  }

    .btnSlideren:hover {
      .prev-fa1 {
        margin-right: 13px !important;

      }
      .next-en1 {
        margin-left: 13px !important;

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
      >
        <span className="prev-fa1">&#8592;</span>Previous

      </button>
      <button
        className="btnSlideren"
        onClick={() => {
          nextPage1();

          props.next();
        }}
        style={{ marginLeft: "40px" }}

      >
       Next <span className="next-en1"> &#8594;</span>

      </button>
    </DIV>
  );
}
