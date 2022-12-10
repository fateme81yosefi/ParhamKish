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
    justifyContent: LangId === "fa" ? "right" : "left",
  };
  const styleBoldText = {
    direction: LangId === "fa" ? "rtl" : "ltr",
    textAlign: LangId === "fa" ? "right" : "left",
    right: LangId === "fa" ? "100px" :{},
    left: LangId === "en" ? "100px" : {},
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
              <h1> our products </h1>
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
              <p>
                محصولات <span className="parhamColor">پرهام کیش</span>
              </p>
            ) : (
              <p>
                products <span className="parhamColor">Parham Kish</span>
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
                  Icom is one of the projects of the Parham Kish group of
                  companies, which started its activity in 2017 through a
                  commercial agreement with major companies in the field of
                  banking infrastructure in the country, such as Mellat Payment
                  Company and Shagaig Software Engineering Company. Ikam is a
                  product based on the exclusive knowledge of the Parham Kish
                  group of companies, which has succeeded in obtaining a patent
                  certificate and a knowledge-based certificate from the Vice
                  President of Science and Technology.Icom's field of activity
                  is to introduce the products and services of the receivers to
                  the members It is its own customer club and offers discounts
                  and shopping credits This path is both for the prosperity of
                  the business of the adopters and for help It pays attention to
                  the purchasing power of consumer and general needs of the
                  members. Under Cardless payment systems, electronic wallets,
                  agent management systems, electronic payment sub-systems, etc.
                  are among the features of this application
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
                  ایکلاب با استفاده از زیرساخت اختصاصی سوئیچینگ بانکی، علاوه بر
                  امکان استفاده از کارت در ساختار باشگاه مشتریان با الگوریتم های
                  پرداخت بدون کارت، سبب بهینه سازی و کاهش هزینه های چاپ کارت
                  برای سازمان شما و آسان شدن نگهداری و یا حل مشکل گم شدن کارت
                  برای مشتریان می گردد. همچنین کاربران با نصب فقط یک اپلیکیشن می
                  توانند از خدمات باشگاه مشتریان چندین فروشگاه طرف قرارداد
                  استفاده نمایند. ایکلاب یک باشگاه مشتریان مبتنی بر الگوریتم های
                  پایش ابری است و به همین جهت با کمترین میزان سرمایه کذاری کسب و
                  کارها و بنگاه های اقتصادی بیشترین امکانات باشگاه مشتریان را به
                  ارمغان می اورد.
                </p>
              ) : (
                <p style={stylee}>
                  By using a dedicated bank switching infrastructure, in
                  addition to the possibility of using a card in the customer
                  club structure with cardless payment algorithms, Iqlab
                  optimizes and reduces card printing costs for your
                  organization and makes it easier to maintain or solve the
                  problem of losing a card for Becomes customers. Also, by
                  installing only one application, users can use the customer
                  club services of several stores on the contract side. Iklab is
                  a customer club based on cloud monitoring algorithms, and for
                  this reason, it brings the most features of the customer club
                  with the lowest amount of investment to businesses and
                  economic enterprises.
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
                  مجموعه نرم افزار های ایسورس یک بسته کامل نرم افزار مالی و
                  اداری بوده که به صورت اختصاصی و با هدف ارائه خدمات و راهکارهای
                  هوشمند و خلاق به شرکت ها و سازمانها و به منظور ارتقاء سطح بهره
                  وری، کارایی و بهبود همکاری سازمانی در آنها، طراحی و تولید شده
                  است. در حال حاضر ایسورس، نرم افزار های مالی و خزانه، کارگزینی،
                  حقوق و دستمزد، انبار، اموال و دارایی و نرم افزار فروشگاهی را
                  با قابلیت های منحصر به فرد به شرکت ها و سازمانها ارائه کرده و
                  از آنجایی که در طراحی و تولید این نرم افزار ها به نیازهای حال
                  و آینده مدیران سازمان ها و شرکت ها توجه ویژه ای شده، کمک قابل
                  توجهی به مدیران سازمان ها و شرکت ها در جهت مدیریت هوشمند
                  سازمان خود می نماید.
                </p>
              ) : (
                <p style={stylee}>
                  The Isource software collection is a complete package of
                  mandatory financial software, which is exclusively and with
                  the aim of providing smart and creative services and solutions
                  to companies and organizations in order to improve the level
                  of productivity, efficiency and improve organizational
                  cooperation in them, design and Is produced.It has provided
                  companies and organizations with unique capabilities, and
                  since special attention has been paid to the present and
                  future needs of managers of organizations and companies in the
                  design and production of these softwares, it is a significant
                  help to managers of organizations and companies. In the
                  direction of intelligent management of his organization.
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
                  سامانه فروشگاھی ایشاپ با ساختار فنی منعطف، از تمامی کسب و
                  کارھای کوچک و بزرگ با چندین شعبه و انبار پشتیبانی می کند. این
                  فروشگاه آنلاین همراه با اپلیکیشنهای اندروید و iOS این امکان را
                  می دھد که صاحبان فروشگاه، غرفه داران و یا تامین کنندگان کالا
                  بتوانند در ھر لحظه و ھر مکانی با ھر وسیله ای که امکان اتصال به
                  اینترنت را دارد از وضعیت کسب و کار و فروش در لحظه خود مطلع
                  شوند و آخرین گزارشات را به لحظه را مشاھده نمایند. زیر سیستمهای
                  لوجستیک و تحویل کالا، الگوریتم های فروش مویرگی و بازاریابی
                  فروش، امکان ارسال اطلاعات به زیر سیستمهای داخلی کسی و کارها و
                  بنگاه های اقتصادی از سایر قابلیتهای این سامانه میباشد.
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
