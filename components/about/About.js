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

    right:
      window.innerWidth > 1900 && LangId === "fa"
        ? LangId === "fa"
          ? "12.5%"
          : {}
        : " 50px",
    left:
      window.innerWidth > 1900 && LangId === "en"
        ? LangId === "en"
          ? "20%"
          : {}
        : " 50px",
  };
  const control = useAnimation();
  const [ref, inView] = useInView({});

  const boxVariant = {
    visible: {
      x: "10px",
      transition: { duration: 2 },
      opacity: 1,
    },
    hidden: {
      x: "-50%",
      opacity: 0,
    },
  };

  const imageVarien = {
    visible: {
      y: "10px",
      transition: { duration: 2 },
    },
    hidden: {
      // y: "-100%",
      y: "-99%",
    },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [inView]);

  console.log("in view = ", inView);
  return (
    <div className="containAbout" id="about" style={{ overflow: "hidden" }}>
      <div className="row">
        <div className="container">
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="containTitlebigEcom containTitlebigEcombetween"
            style={styleBoldText}
          >
            {LangId === "fa" ? (
              <h1>درباره ما </h1>
            ) : (
              <h1 className="en-big-title"> About Us </h1>
            )}
          </motion.div>
        </div>
      </div>
      <div className="container containerEditMax">
        <div className="row titleAbout">
          <div className="col-4 lineall"></div>
          <div className="col-4 lineall"></div>
          <div className="col-4 lineall"></div>
          {LangId === "fa" ? (
            <p className="headlitt">
              <b>
                <strong>
                  درباره <span className="parhamColor">پرهام کیش</span>
                </strong>
              </b>
            </p>
          ) : (
            <p className="headlitt">
              <span className="parhamColor"> Parham Kish</span> About
            </p>
          )}
        </div>
        <div className="row" style={{ overflow: "hidden" }}>
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
       <div className="col-md-12 col-lg-8 contain2colAbout">
       <div className="col-sm-12 col-lg-6 aboutTxt">
            {LangId === "fa" ? (
              <p style={stylee} className="fa-about">
                بسیاری نظیر گواهی ثبت اختراع به شماره، ۶۸۳۴۰ عضویت بنیاد ملی
                نخبگان و دریافت گواهی شرکت دانش بنیان از معاونت علمی و پژوهشی
                ریاست جمهوری، دریافت مجوز بند ب از وزارت میراث فرهنگی ، گردشگری
                و صنایع دستی و همینطور مفتخر به دریافت عنوان فناور برتر گردیده
                است. این هلدینگ به منظور توسعه فعالیت خود در سطح بین الملل اقدام
                به راه اندازی نخستین دفتر خود رد خارج از مرزهای ایران کرده و در
                سال ۲۰۱۸ اقدام به ایجاد شعبه در کشور استونی و در شهر تالین تحت
                عنوان تجارت الکترونیک زوناکس کرد. شرکت های تابعه این هلدینگ
                پروژه ها و محصولات بسیاری را در حوزه فناوری اطلاعات و ارتباطات
                تا کنون طراحی، اجرا و روانه بازار کرده و اقدامات موثر بسیاری نیز
                در خصوص هوشمند سازی سازمان ها توسط این مجموعه صورت پذیرفته است.
              </p>
            ) : (
              <p style={stylee} className="en-about EN-FONT">
                renowned as a pioneer holding company in Information and
                communication technology across the globe. The international
                holding company of electronic commerce Parham kish has taken
                huge and positive steps in the realm of “Electronic Commerce”
                and “Information and communication technology “. Meanwhile we
                have been awarded licenses, Standards, and a variety of plaques
                of honor including letters patent with the reference number
                68340 from Iran Patent Office, Membership in Iran's National
                Elites Foundation, certificate of the Knowledge Enterprise from
                vice-presidency for science and technology, and travel services
                license, section B with the reference number 1400/م گ/1451, from
                Ministry of Cultural Heritage, Handicrafts and Tourism.
              </p>
            )}
          </div>
          <div className="col-sm-12 col-lg-6 aboutTxt">
            {LangId === "fa" ? (
              <p style={stylee} className="fa-about">
                هلدینگ بین‌المللی تجارت الکترونیک پرهام کیش، یک مجموعه متشکل از
                چندین شرکت فعال در حوزه فناوری اطلاعات و ارتباطات بوده و درزمینه
                مشاوره و انتقال تکنولوژی در حوزه تجارت الکترونیک، اجرای طرح های
                جامع فناوری اطلاعات و ارتباطات، طراحی و اجرای سامانه‌های کلان
                داده ها ،(بیگ دیتا)طراحی و اجرای نظام های بازاریابی و پیاده سازی
                بسترهای ارتباطی با مخاطبان و مشتریان با شیوه های نوین
                ارتباطی‌تعاملی فعالیت می نماید. این مجموعه فعالیت خود را از سال
                ۱۳۸۸ با نام تجارت الکترونیک پرهام و در جزیره کیش آغاز کرده و پس
                از گذشت بیش یک دهه از فعالیت آن، امروزه به عنوان یک هلدینگ پیشرو
                .در فناوری اطلاعات و ارتباطات در سطح بین الملل شناخته می شود
                پرهام کیش در حوزه تجارت الکترونیک و فناوری اطلاعات و ارتباطات
                گام های بلند و مثبتی برداشته است. و در این راه موفق به دریافت
                مجوز ها استاندارد ها و تندیس های افتخار
              </p>
            ) : (
              <p style={stylee} className="en-about EN-FONT">
                The international holding company of “Parham Kish“, specializing
                in the field of Electronic Commerce, Consists of multiple firms
                which are active in the field of Information and Communications
                Technology. Our activities include consultation, and
                transferring technology in Electronic Commerce, Implementation
                of Information and Communication master plans, design and
                implementation of big data systems, Designing and running
                marketing systems, and implementation of communication platforms
                for customers and users with the state-of-the-art interactive
                communication methods. Our company was founded in 1388 in Kish
                Island and started its activity under the name of E-commerce
                Parham Kish. After the span of a decade, today our company is
              </p>
            )}
          </div>
       </div>
        </div>
      </div>
    </div>
  );
}
