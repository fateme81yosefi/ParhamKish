import React, { Fragment, useContext, useState } from "react";
import { LangContext } from "../../shared/LanguageContext";
import "./projects.css";
import styled from "styled-components";

export default function Projects() {
  const [LangId, setLangId] = useContext(LangContext);

  // const DIV = styled.div`
  //   .dirctiProj {

  //     .singleProjImg:hover {
  //       .modifImg {
  //         opacity: 1;
  //         display:none
  //       }
  //       .singIm{
  //         filter: brightness(100%);

  //       }

  //     }
  //   }
  // `;

  return (
    <Fragment>
      <div className="containProjects" id="projects" style={{ overflow: "hidden" }}>
        <div className="container containerEditMax" >
          <div className="row titleAbout">
            <div className="col-4 lineall"></div>
            <div className="col-4 lineall"></div>
            <div className="col-4 lineall"></div>
            {LangId === "fa" ? (
              <p style={{ margin: "5% 0" }} className="headlitt">
                پروژه های <span className="parhamColor">پرهام کیش</span>
              </p>
            ) : (
              <p className="headlitt projlitttiltle">
                 <span className="parhamColor">Parham Kish</span> projects
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
              src="https://s2.uupload.ir/files/afsane-sazan-pic_848j.jpg"
            ></img>
            <div className="logoProject">
              <img src="https://s2.uupload.ir/files/logo-afsane-sazan_1ust.png"></img>

              {/* {LangId === "fa" ? <p> افسانه سازان</p> : <p>afsane sazan   </p>} */}
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
              src="https://s2.uupload.ir/files/bime-moalem-pic_g1pp.jpg"
            ></img>
            <div className="logoProject">
              <img src="https://s2.uupload.ir/files/logo-bime-moalem_hhj6.png"></img>
              {/* {LangId === "fa" ? <p> بیمه معلم </p> : <p> bime moallem </p>} */}
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
              src="https://s2.uupload.ir/files/gheshm-ziba-pic_b26q.jpg"
            ></img>
            <div className="logoProject">
              <img src="https://s2.uupload.ir/files/logo-qeshmziba_gegs.png"></img>
              {/* {LangId === "fa" ? <p> قشم زیبا</p> : <p> qeshmziba </p>} */}
            </div>
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
              src="https://s2.uupload.ir/files/shandizman-pic_hr17.jpg"
            ></img>
            <div className="logoProject">
              <img src="https://s2.uupload.ir/files/logo-shandizman_rslj.png"></img>
              {/* {LangId === "fa" ? <p>شاندیز من </p> : <p> shandizman </p>} */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
