import React, { useContext, useEffect } from "react";
import { LangContext } from "../../shared/LanguageContext";
import "./Products.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SingleProductOdd from "./SingleProductOdd";
import SingleProductEven from "./SingleProductEven";

export default function Products() {
  const [LangId, setLangId] = useContext(LangContext);
  const stylee = {
    direction: LangId === "fa" ? "rtl" : "ltr",
  };
  const stylee1 = {
    // justifyContent: window.innerWidth<992 ? "center" : {},
    justifyContent: LangId === "fa" && window.innerWidth>992 ? "right" : "center",
    justifyContent: LangId === "en" && window.innerWidth>992 ? "left": {},


  };
  const styleBoldText = {
    direction: LangId === "fa" ? "rtl" : "ltr",
    textAlign: LangId === "fa" ? "right" : "left",
    right: LangId === "fa" ? "10%" :{},
    left: LangId === "en" ? "10%" : {},
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: {
      x: "10px",
      transition: { duration: 2 },

    },
    hidden: {
      x: "-50%",
      
    },
  };

  const imageVarien = {
    visible: {
      y: "10px",
      transition: { duration: 1 },
    },
    hidden: {
      y: "-100%",
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [inView]);
  return (
    <>
      <div className="row">
        <div className="container">
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="containTitlebigEcom"
            style={styleBoldText}
          >
            {LangId === "fa" ? (
              <h1 id="productId">
                {" "}
                محصولات ما
              </h1>
            ) : (
              <h1> Our Products </h1>
            )}
          </motion.div>
        </div>
      </div>
      <div className="containProducts">
        <div className="container">
          <div className="row titleAbout">
            <div className="col-4 lineproducts"></div>
            <div className="col-4 lineproducts"></div>
            <div className="col-4 lineproducts"></div>
            {LangId === "fa" ? (
              <p className="mahsolatpara">
                محصولات <span className="parhamColor">پرهام کیش</span>
              </p>
            ) : (
              <p className="mahsolatpara">
                Products <span className="parhamColor">Parham Kish</span>
              </p>
            )}
          </div>
        </div>

        <div className="container">
          <div className="row dirnorm borderBottColor"
            style={{ display: "flex", alignItem: "center",overflow:"hidden" }}
          >
            <div className="col-xs-12 col-lg-4 productImage">
              <SingleProductOdd source="https://s6.uupload.ir/files/product-1-min_603u.jpg" num="1"/>
             
            </div>
            <div className="col-xs-12 col-lg-8 productText productTxtOdd">
              <div className="logoIm" alt="logo1" style={stylee1}>
                <img src="https://s6.uupload.ir/files/ecom-logo-min_lnrn.png"></img>
              </div>
              {LangId === "fa" ? (
                <p style={stylee}>
                  ایکام یکی از پروژه های گروه شرکت های پرهام کیش است که طی یک
                  قرارداد تجاری با شرکتهای بزرگ حوزه زیر ساخت بانکی کشور از قبیل
                  شرکت به پرداخت ملت و شرکت مهندسی نرم افزار شقایق، فعالیت خود
                  را از سال 1397 آغاز نمود. ایکام یک محصول مبتنی بر دانش انحصاری
                  گروه شرکت های پرهام کیش بوده که موفق به اخذ گواهی ثبت اختراع و
                  نیز گواهی دانش بنیان از معاونت علمی و فناوری ریاست جمهوری شده
                  است. حوزه فعالیت ایکام، معرفی محصولات و خدمات پذیرندگان به
                  اعضاء باشگاه مشتریان خود میباشد و با ارائه تخفیفات و اعتبارات
                  خرید در این مسیر هم به رونق کسب و کار پذیرندگان میپردازد و هم
                  در جهت کمک به قدرت خرید مایحتاج مصرفی و عمومی اعضاء اهتمام می
                  ورزد. زیر سیستم های پرداخت بدون کارت ، کیف پول الکترونیک،
                  سامانه مدیریت معرف،زیر سیستم های پرداخت الکترونیک و... از
                  امکانات این اپلیکیشن همیشه همراه میباشد.
                </p>
              ) : (
                <p style={stylee}>
                    Eshop store system with flexible technical structure, from all
                  businesses It supports small and large businesses with
                  multiple branches and warehouses. this The online store with
                  Android and iOS applications makes this possible It means that
                  store owners, exhibitors or suppliers of goods They can
                  connect at any time and any place with any device The Internet
                  is aware of the status of business and sales at the moment and
                  view the latest reports at the moment. subsystems Logistics
                  and delivery of goods, capillary sales and marketing
                  algorithms Sales, the possibility of sending information to
                  someone's internal subsystems and tasks Economic enterprises
                  are among the other features of this system.
                </p>
              )}
            </div>
          </div>
          <div className="row dirRev borderBottColor">
            <div className="col-xs-12 col-lg-4 productImage">
            <SingleProductEven source="https://s6.uupload.ir/files/product-2-min_b31f.jpg" num="2"/>

  
            </div>
            <div className="col-xs-12 col-lg-8 productText productTxtEven">
              <div className="logoIm" style={stylee1}>
                <img
                  alt="logo2"
                  src="https://s6.uupload.ir/files/eclub-logo-min_i99t.png"
                ></img>
              </div>

              {LangId === "fa" ? (
                <p style={stylee}>
                ایکام یکی از پروژه های گروه شرکت های پرهام کیش است که طی یک
                  قرارداد تجاری با شرکتهای بزرگ حوزه زیر ساخت بانکی کشور از قبیل
                  شرکت به پرداخت ملت و شرکت مهندسی نرم افزار شقایق، فعالیت خود
                  را از سال 1397 آغاز نمود. ایکام یک محصول مبتنی بر دانش انحصاری
                  گروه شرکت های پرهام کیش بوده که موفق به اخذ گواهی ثبت اختراع و
                  نیز گواهی دانش بنیان از معاونت علمی و فناوری ریاست جمهوری شده
                  است. حوزه فعالیت ایکام، معرفی محصولات و خدمات پذیرندگان به
                  اعضاء باشگاه مشتریان خود میباشد و با ارائه تخفیفات و اعتبارات
                  خرید در این مسیر هم به رونق کسب و کار پذیرندگان میپردازد و هم
                  در جهت کمک به قدرت خرید مایحتاج مصرفی و عمومی اعضاء اهتمام می
                  ورزد. زیر سیستم های پرداخت بدون کارت ، کیف پول الکترونیک،
                  سامانه مدیریت معرف،زیر سیستم های پرداخت الکترونیک و... از
                  امکانات این اپلیکیشن همیشه همراه میباشد.
                </p>
              ) : (
                <p style={stylee}>
                  Eshop store system with flexible technical structure, from all
                  businesses It supports small and large businesses with
                  multiple branches and warehouses. this The online store with
                  Android and iOS applications makes this possible It means that
                  store owners, exhibitors or suppliers of goods They can
                  connect at any time and any place with any device The Internet
                  is aware of the status of business and sales at the moment and
                  view the latest reports at the moment. subsystems Logistics
                  and delivery of goods, capillary sales and marketing
                  algorithms Sales, the possibility of sending information to
                  someone's internal subsystems and tasks Economic enterprises
                  are among the other features of this system.
                </p>
              )}
            </div>
          </div>
          <div className="row dirnorm borderBottColor" style={{overflow:"hidden" }}>
            <div className="col-xs-12 col-lg-4 productImage">
            <SingleProductOdd source="https://s6.uupload.ir/files/product-3-min_33k7.jpg" num="3"/>
            </div>
            <div className="col-xs-12 col-lg-8 productText productTxtOdd">
              <div className="logoIm" style={stylee1}>
                <img
                  alt="logo3"
                  src="https://s6.uupload.ir/files/esource-logo-min_ngci.png"
                ></img>
              </div>

              {LangId === "fa" ? (
                <p style={stylee}>
                ایکام یکی از پروژه های گروه شرکت های پرهام کیش است که طی یک
                  قرارداد تجاری با شرکتهای بزرگ حوزه زیر ساخت بانکی کشور از قبیل
                  شرکت به پرداخت ملت و شرکت مهندسی نرم افزار شقایق، فعالیت خود
                  را از سال 1397 آغاز نمود. ایکام یک محصول مبتنی بر دانش انحصاری
                  گروه شرکت های پرهام کیش بوده که موفق به اخذ گواهی ثبت اختراع و
                  نیز گواهی دانش بنیان از معاونت علمی و فناوری ریاست جمهوری شده
                  است. حوزه فعالیت ایکام، معرفی محصولات و خدمات پذیرندگان به
                  اعضاء باشگاه مشتریان خود میباشد و با ارائه تخفیفات و اعتبارات
                  خرید در این مسیر هم به رونق کسب و کار پذیرندگان میپردازد و هم
                  در جهت کمک به قدرت خرید مایحتاج مصرفی و عمومی اعضاء اهتمام می
                  ورزد. زیر سیستم های پرداخت بدون کارت ، کیف پول الکترونیک،
                  سامانه مدیریت معرف،زیر سیستم های پرداخت الکترونیک و... از
                  امکانات این اپلیکیشن همیشه همراه میباشد.
                </p>
              ) : (
                <p style={stylee}>
                  Eshop store system with flexible technical structure, from all
                  businesses It supports small and large businesses with
                  multiple branches and warehouses. this The online store with
                  Android and iOS applications makes this possible It means that
                  store owners, exhibitors or suppliers of goods They can
                  connect at any time and any place with any device The Internet
                  is aware of the status of business and sales at the moment and
                  view the latest reports at the moment. subsystems Logistics
                  and delivery of goods, capillary sales and marketing
                  algorithms Sales, the possibility of sending information to
                  someone's internal subsystems and tasks Economic enterprises
                  are among the other features of this system.
                </p>
              )}
            </div>
          </div>
          <div className="row dirRev borderBottColor" style={{overflow:"hidden" }}>
            <div className="col-xs-12 col-lg-4 productImage" style={{overflow:"hidden" }}>
            <SingleProductEven source="https://s6.uupload.ir/files/product-4-min_uhel.jpg" num="4"/>

        
            </div>
            <div className="col-xs-12 col-lg-8 productText productTxtEven">
              <div className="logoIm" style={stylee1}>
                <img
                  alt="logo4"
                  src="https://s6.uupload.ir/files/eshop-logo-min_del.png"
                ></img>
              </div>
              {LangId === "fa" ? (
                <p style={stylee}>
                 ایکام یکی از پروژه های گروه شرکت های پرهام کیش است که طی یک
                  قرارداد تجاری با شرکتهای بزرگ حوزه زیر ساخت بانکی کشور از قبیل
                  شرکت به پرداخت ملت و شرکت مهندسی نرم افزار شقایق، فعالیت خود
                  را از سال 1397 آغاز نمود. ایکام یک محصول مبتنی بر دانش انحصاری
                  گروه شرکت های پرهام کیش بوده که موفق به اخذ گواهی ثبت اختراع و
                  نیز گواهی دانش بنیان از معاونت علمی و فناوری ریاست جمهوری شده
                  است. حوزه فعالیت ایکام، معرفی محصولات و خدمات پذیرندگان به
                  اعضاء باشگاه مشتریان خود میباشد و با ارائه تخفیفات و اعتبارات
                  خرید در این مسیر هم به رونق کسب و کار پذیرندگان میپردازد و هم
                  در جهت کمک به قدرت خرید مایحتاج مصرفی و عمومی اعضاء اهتمام می
                  ورزد. زیر سیستم های پرداخت بدون کارت ، کیف پول الکترونیک،
                  سامانه مدیریت معرف،زیر سیستم های پرداخت الکترونیک و... از
                  امکانات این اپلیکیشن همیشه همراه میباشد.
                </p>
              ) : (
                <p style={stylee}>
                  Eshop store system with flexible technical structure, from all
                  businesses It supports small and large businesses with
                  multiple branches and warehouses. this The online store with
                  Android and iOS applications makes this possible It means that
                  store owners, exhibitors or suppliers of goods They can
                  connect at any time and any place with any device The Internet
                  is aware of the status of business and sales at the moment and
                  view the latest reports at the moment. subsystems Logistics
                  and delivery of goods, capillary sales and marketing
                  algorithms Sales, the possibility of sending information to
                  someone's internal subsystems and tasks Economic enterprises
                  are among the other features of this system.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
