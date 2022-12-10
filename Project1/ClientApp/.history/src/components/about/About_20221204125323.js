import React, { useContext, useEffect } from "react";
import { LangContext } from "../../shared/LanguageContext";
import "./about.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [LangId, setLangId] = useContext(LangContext);

  const stylee = {
    direction: LangId === "fa" ? "rtl" : "ltr",
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
      opacity:1

    },
    hidden: {
      x: "-50%",
      opacity:0
    },
  };

  const imageVarien = {
    visible: {
      y: "10px",
      transition: { duration: 2 },
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
    <div className="containAbout" style={{ overflow: "hidden" }}>
      <div className="row">
        <div className="container">
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="containTitlebigEcom"
            style={styleBoldText}>
            {LangId === "fa" ? (
              <h1> درباره ما</h1>
            ) : (
              <h1> about us </h1>
            )}
          </motion.div>
        </div>
      </div>
      <div className="container">
        <div className="row titleAbout">
          <div className="col-4 lineall"></div>
          <div className="col-4 lineall"></div>
          <div className="col-4 lineall"></div>
          {LangId === "fa" ? (
            <p>
              درباره <span className="parhamColor">پرهام کیش</span>
            </p>
          ) : (
            <p>
              about <span className="parhamColor">Parham Kish</span>
            </p>
          )}
        </div>
        <div className="row" style={{overflow:"hidden"}}>
          <motion.div
            ref={ref}
            variants={imageVarien}
            initial="hidden"
            animate={control}
            className="col-sm-12 col-md-0 col-lg-4 imgAbout"
          >
            <img
              alt="aboutImage"
              src="https://s6.uupload.ir/files/about-us-parham-kish-min_6jxs.jpg"
            />
          </motion.div>

          <div className="col-sm-12 col-md-6 col-lg-4 aboutTxt">
            {LangId === "fa" ? (
              <p style={stylee}>
                هلدینگ بین‌المللی تجارت الکترونیک پرهام کیش یک مجموعه متشکل از
                چندین شرکت فعال در حوزه فناوری اطلاعات و ارتباطات بوده و درزمینه
                مشاوره و انتقال تکنولوژی در حوزه تجارت الکترونیک، اجرای طرح های
                جامع فناوری اطلاعات و ارتباطات، طراحی و اجرای سامانه‌های کلان
                داده ها (بیگ دیتا)، طراحی و اجرای نظام های بازاریابی و پیاده
                سازی بسترهای ارتباطی با مخاطبان و مشتریان با شیوه های نوین
                ارتباطی‌تعاملی فعالیت می نماید. این مجموعه فعالیت خود را از سال
                1388 با نام تجارت الکترونیک پرهام و در جزیره کیش آغاز کرده و پس
                از گذشت بیش یک دهه از فعالیت آن، امروزه به عنوان یک هلدینگ پیشرو
                در فناوری اطلاعات و ارتباطات در سطح بین الملل شناخته می شود.
                در فناوری اطلاعات و ارتباطات در سطح بین الملل شناخته می شود.
                در فناوری اطلاعات و ارتباطات در سطح بین الملل شناخته می شود.
                در فناوری اطلاعات و ارتباطات در سطح بین الملل شناخته می شود.
                در فناوری اطلاعات و ارتباطات در سطح بین الملل شناخته می شود.
                در فناوری اطلاعات و ارتباطات در سطح بین الملل شناخته می شود.
              
              </p>
            ) : (
              <p style={stylee}>
                Perham Kish Holding in the field of e-commerce and information
                technology Communication has taken long and positive steps and
                succeeded in receiving Licenses, standards and many honors such
                as registration certificate Patent No. 68340, membership of the
                National Elite Foundation and receiving a company certificate
                Knowledge is based on the scientific and research vice
                president. this Holding to develop its activities at the
                international level It opened its first office outside the
                borders of Iran in 2018 Establishing a branch in Estonia and in
                the city of Tallinn under the title of business Zonax
                electronics. Subsidiaries of this holding projects and products
                designed many in the field of information and communication
                technology so far,
              </p>
            )}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 aboutTxt">
            {LangId === "fa" ? (
              <p style={stylee}>
                هلدینگ پرهام کیش در حوزه تجارت الکترونیک و فناوری اطلاعات و
                ارتباطات گام های بلند و مثبتی برداشته و در این راه موفق به
                دریافت مجوزها، استانداردها و تندیس های افتخار بسیاری نظیر گواهی
                ثبت اختراع به شماره ۶۸۳۴۰، عضویت بنیاد ملی نخبگان و دریافت گواهی
                شرکت دانش بنیان از معاونت علمی و پژوهشی ریاست جمهوری شده است.
                این هلدینگ به منظور توسعه فعالیت خود در سطح بین الملل اقدام به
                راه اندازی نخستین دفتر خود در خارج از مرز های ایران کرده و در
                سال 2018 اقدام به ایجاد شعبه در کشور استونی و در شهر تالین تحت
                عنوان تجارت الکترونیک زوناکس کرد. شرکت های تابعه این هلدینگ
                پروژه ها و محصولات بسیاری را در حوزه فناوری اطلاعات و ارتباطات
                تاکنون طراحی،
                در فناوری اطلاعات و ارتباطات در سطح بین الملل شناخته می شود.
                در فناوری اطلاعات و ارتباطات در سطح بین الملل شناخته می شود.
                در فناوری اطلاعات و ارتباطات در سطح بین الملل شناخته می شود.
                در فناوری اطلاعات و ارتباطات در سطح بین الملل شناخته می شود.
                در فناوری اطلاعات و ارتباطات در سطح بین الملل شناخته می شود.
              
              </p>
            ) : (
              <p style={stylee}>
                Perham Kish Holding in the field of e-commerce and information
                technology Communication has taken long and positive steps and
                succeeded in receiving Licenses, standards and many honors such
                as registration certificate Patent No. 68340, membership of the
                National Elite Foundation and receiving a company certificate
                Knowledge is based on the scientific and research vice
                president. this Holding to develop its activities at the
                international level It opened its first office outside the
                borders of Iran in 2018 Establishing a branch in Estonia and in
                the city of Tallinn under the title of business Zonax
                electronics. Subsidiaries of this holding projects and products
                designed many in the field of information and communication
                technology so far,
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
