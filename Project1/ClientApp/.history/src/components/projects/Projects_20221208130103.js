import React, { Fragment, useContext, useState } from "react";
import { LangContext } from "../../shared/LanguageContext";
import "./projects.css";
import styled from "styled-components";

export default function Projects() {
  const [LangId, setLangId] = useContext(LangContext);


  const DIV = styled.div`
    .dirctiProj {
      .logoProject{
        
      }
      .singleProjImg:hover {
        .modifImg {
          opacity: 1;
          display:none
        }
        .singIm{
          filter: brightness(100%);

        }
        .logoProject {
          display: none;
        }
      }
    }
  `;

  return (
    <Fragment>
      <DIV className="containProjects" style={{ overflow: "hidden" }}>
        <div className="container">
          <div className="row titleAbout">
            <div className="col-4 lineall"></div>
            <div className="col-4 lineall"></div>
            <div className="col-4 lineall"></div>
            {LangId === "fa" ? (
              <p style={{margin:"5% 0"}}>
                پروژه های <span className="parhamColor">پرهام کیش</span>
              </p>
            ) : (
              <p>
                projects <span className="parhamColor">Parham Kish</span>
              </p>
            )}
          </div>
        </div>
        <div className="dirctiProj">
          <div className="singleProjImg item1">
            <div className="modifImg">
              <img
                src="https://s6.uupload.ir/files/open-details_7wva.png"
                className="modifier"
              ></img>
            </div>

            <img
              className="singIm"
              src="https://s6.uupload.ir/files/project-4-min_addp.jpg"
            ></img>
            <div className="logoProject">
              <img src="https://s6.uupload.ir/files/logo-3-min_fn06.png"></img>

              {LangId === "fa" ? <p>فروشگاه آلور</p> : <p> ALVER Store </p>}
            </div>
          </div>
          <div className="singleProjImg item2">
            <div className="modifImg">
              <img
                src="https://s6.uupload.ir/files/open-details_7wva.png"
                className="modifier"
              ></img>
            </div>
            <img
              className="singIm"
              src="https://s6.uupload.ir/files/project-3-min_vkvd.jpg"
            ></img>
            <div className="logoProject">
              <img src="https://s6.uupload.ir/files/logo-2-min_av3j.png"></img>
              {LangId === "fa" ? (
                <p>فروشگاه های با ما</p>
              ) : (
                <p> Bama Stores </p>
              )}
            </div>
          </div>
          <div className="singleProjImg item3">
            <div className="modifImg">
              <img
                src="https://s6.uupload.ir/files/open-details_7wva.png"
                className="modifier"
              ></img>
            </div>
            <img
              className="singIm"
              src="https://s6.uupload.ir/files/project-1-min_ev1m.jpg"
            ></img>
          </div>
          <div className="singleProjImg item4">
            <div className="modifImg">
              <img
                src="https://s6.uupload.ir/files/open-details_7wva.png"
                className="modifier"
              ></img>
            </div>
            <img
              className="singIm"
              src="https://s6.uupload.ir/files/project-2-min_f4ez.jpg"
            ></img>
            <div className="logoProject">
              <img src="https://s6.uupload.ir/files/logo-1-min_ns3c.png"></img>
              {LangId === "fa" ? <p>فروشگاه 361</p> : <p> Store 361 </p>}
            </div>
          </div>
        </div>
      </DIV>
    </Fragment>
  );
}
