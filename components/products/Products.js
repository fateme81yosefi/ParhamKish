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

      justifyContent : window.innerWidth > 992? (LangId==="fa" ?"right":"left"):"center"
      
  };
  const styleBoldText = {
    direction: LangId === "fa" ? "rtl" : "ltr",
    textAlign: LangId === "fa" ? "right" : "left",
  
    right : window.innerWidth > 1900 && LangId==="fa" ? LangId==="fa"?"12.5%" :{} :" 50px",
    left : window.innerWidth > 1900 &&  LangId==="en" ? LangId==="en"?"20%" :{} :" 50px",
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
      <div className="row" id="products">
        <div className="container" style={{maxWidth: "1121px"}}>
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="containTitlebigEcom containTitlebigEcombetween"
            style={styleBoldText}
          >
            {LangId === "fa" ? (
              <h1 id="productId"> محصولات ما</h1>
            ) : (
              <h1 className="en-big-title"> Our Products </h1>
            )}
          </motion.div>
        </div>
      </div>
      <div className="containProducts">
        <div className="container containerEditMax" >
          <div className="row titleAbout">
            <div className="col-4 lineproducts"></div>
            <div className="col-4 lineproducts"></div>
            <div className="col-4 lineproducts"></div>
            {LangId === "fa" ? (
              <p className="mahsolatpara headlitt">
                محصولات <span className="parhamColor">پرهام کیش</span>
              </p>
            ) : (
              <p className="mahsolatpara headlitt">
                 <span className="parhamColor">Parham Kish</span> Products
              </p>
            )}
          </div>
        </div>

        <div className="container containerEditMax">
          <div
            className="row dirnorm borderBottColor"
            style={{ display: "flex", alignItem: "center", overflow: "hidden" }}
          >
            <div className="col-xs-12 col-lg-4 productImage">
              <SingleProductOdd
                source="https://s6.uupload.ir/files/product-1-min_603u.jpg"
                num="1"
              />
            </div>
            <div className="col-xs-12 col-lg-8 productText productTxtOdd">
              {
                LangId==="fa"?
                <div className="logoIm" alt="logo1" style={stylee1}>
                <img src="https://s6.uupload.ir/files/ecom-logo-min_lnrn.png"></img>
              </div>
                :
                <div className="logoIm" alt="logo1" style={stylee1}>
                <img src="https://s2.uupload.ir/files/ecom-logo-en_u3xc.png"></img>
              </div>
              }
              
              {LangId === "fa" ? (
                <p style={stylee}>
                  ایکام یکی از پروژه های گروه شرکت های پرهام کیش است که طی یک
                  قرارداد تجاری با شرکتهای بزرگ حوزه زیر ساخت بانکی کشور از قبیل
                  شرکت به پرداخت ملت و شرکت مهندسی نرم افزار شقایق، فعالیت خود
                  را از سال ۱۳۹۷ آغاز نمود. حوزه فعالیت ایکام، معرفی محصولات و
                  خدمات پذیرندگان به اعضاء باشگاه مشتریان خود میباشد و با ارائه
                  تخفیفات و اعتبارات خرید در این مسیر هم به رونق کسب و کار
                  پذیرندگان میپردازد و هم در جهت کمک به قدرت خرید مایحتاج مصرفی
                  و عمومی اعضاء اهتمام می ورزد.
                  <br />
                  ایکام درصدد است تا با بکارگیری شیوه های نوین تبلیغاتی ، در
                  حوزه خرید اعتباری روشی نوین را ارائه نماید که از یک سو برای
                  صاحبان کالاها و خدمات سودآور باشد، و از سوی دیگر برای مشتریان
                  و خریداران صرفۀ اقتصادی بالایی داشته باشد. استفاده از قدرت
                  خرید گروهی و خرید اعتباری باعث کسر شدن هزینه های تبلیغاتی
                  سربار بر گروه کالاها و خدمات گردیده و در نتیجه این میزان کسر
                  هزینه به قدرت خرید مشتریان اضافه میگردد.
                </p>
              ) : (
                <p style={stylee} className="EN-FONT">
                  Ecom is one of the projects of Parham Kish group of companies,
                  which started its activity in 2017 by a commercial agreement
                  with major companies in the field of banking infrastructure in
                  the country, such as “Mellat” Payment Company and the
                  Engineering Company of Shaghayegh Software. The realm of the
                  activities of Ecom includes introducing products and
                  recipients’ services to the members of customers’ club. Also,
                  by offering discounts and purchase credits, the company helps
                  recipients to promote their business, as well as helping their
                  purchasing power in terms of their basic and general needs.
                  Ecom is trying to use new advertising methods to provide a new
                  method in the field of credit purchases, which is profitable
                  for the owners of commodities and services on the one side,
                  and brings economic efficiency to customers on the other side.
                </p>
              )}
            </div>
          </div>
          <div className="row dirRev borderBottColor">
            <div className="col-xs-12 col-lg-4 productImage">
              <SingleProductEven
                source="https://s6.uupload.ir/files/product-2-min_b31f.jpg"
                num="2"
              />
            </div>
            <div className="col-xs-12 col-lg-8 productText productTxtEven">

            {
                LangId==="fa"?
                <div className="logoIm" style={stylee1}>
                <img
                  alt="logo2"
                  src="https://s6.uupload.ir/files/eclub-logo-min_i99t.png"
                ></img>
              </div>
                :
                <div className="logoIm" alt="logo1" style={stylee1}>
                <img src="https://s2.uupload.ir/files/eclub-logo-en_loc.png"></img>
              </div>
              }

        

              {LangId === "fa" ? (
                <p style={stylee}>
                  هدف باشگاه مشتریان تبدیل مشتریان بالفعل یک بنگاه اقتصادی به
                  مشتریان وفادار و و همیشگی است به نحوی که سایر برندها در حوزه
                  مشابه کسب و کار نتوانند به سادگی تمایل مشتری به تغییر و مصرف
                  کالاهایشان را برانگیزانند. با توجه به قابلیتهای سیستم های
                  پیاده شده در قالب باشگاه مشتریان ، مهمترین عامل را میتوان ثبت
                  رویدادها و رفتارهای مشتریان در پایگاههای داده نام برد. نکته
                  قوت الگوریتمهای وفاداری مشتری، تغییر پذیری ، انعطاف و تعدد
                  اعمال آنها می باشد و لازمه پاسداشت از وفاداری مشتریان اعمال
                  الگوریتهای متفاوت و متغیر در بازه های زمانی خاص و بر اساس
                  شرایط جدید بازار است.
                  <br />
                  در ایکلاب با توجه به اتصال به زیر ساخت بانکی کشور و استفاده از
                  سیستم های سوئیچینگ بانکی امکان تعریف کارتهای بانکی اعضاء نیز
                  در کنار استفاده از کارتهای شخصی سازی شده لویالتی، اختصاصی،
                  کارت عضویت، کارت باشگاه مشتریان، کارت
                  مشتریان VIP،  و ... با ظاهر شبیه به
                  کارت های بانکی و از جنس PVC میسر می باشد.
                </p>
              ) : (
                <p style={stylee} className="EN-FONT">
                  The purpose of the customers’ club is to convert the actual
                  customers of an economic enterprise into loyal and regular
                  customers, in such a way that other brands in the similar
                  guild will not be able to easily entice them to change their
                  desires and become customers of other brands. According to the
                  capabilities of the implemented systems in the form of
                  customers’ club, the most important factor would be the
                  registration of events and customers’ behavior in databases.
                  The strength of the algorithms of customers’ loyalty are
                  variability, flexibility, and multitasking. And to appreciate
                  customers’ loyalty, it is necessary to apply different and
                  variable algorithms in specific time frames according to new
                  market conditions. Eclub is the most comprehensive customer
                  club and fan center management system which is based on the
                  country's banking infrastructure.
                </p>
              )}
            </div>
          </div>
          <div
            className="row dirnorm borderBottColor"
            style={{ overflow: "hidden" }}
          >
            <div className="col-xs-12 col-lg-4 productImage">
              <SingleProductOdd
                source="https://s6.uupload.ir/files/product-3-min_33k7.jpg"
                num="3"
              />
            </div>
            <div className="col-xs-12 col-lg-8 productText productTxtOdd">
            {
                LangId==="fa"?
                <div className="logoIm" style={stylee1}>
                <img
                  alt="logo3"
                  src="https://s6.uupload.ir/files/esource-logo-min_ngci.png"
                ></img>
              </div>
                :
                <div className="logoIm" alt="logo1" style={stylee1}>
                <img src="https://s2.uupload.ir/files/esource-logo-en_z7o7.png"></img>
              </div>
              }
            

              {LangId === "fa" ? (
                <p style={stylee}>
                  مجموعه نرم افزار های ایسورس، یک بسته کامل نرم افزار مالی و
                  اداری بوده که توسط متخصصین گروه شرکت های پرهام کیش به صورت
                  اختصاصی و با هدف ارائه خدمات و راهکارهای هوشمند و خلاق به شرکت
                  ها و سازمانها و به منظور ارتقاء سطح بهره وری، کارایی و بهبود
                  همکاری سازمانی در آنها، طراحی و تولید شده است.
                  <br />
                  در حال حاضر ایسورس، نرم افزار های مالی و خزانه، کارگزینی، حقوق
                  و دستمزد، انبار، اموال و دارایی و نرم افزار فروشگاهی را با
                  قابلیت های منحصر به فرد به شرکت ها و سازمانها ارائه کرده است.
                  از آنجایی که در طراحی و تولید این نرم افزار ها به نیازهای حال
                  و آینده مدیران سازمان ها و شرکت ها توجه ویژه ای شده، کمک قابل
                  توجهی به مدیران سازمان ها و شرکت ها در جهت مدیریت هوشمند
                  سازمان خود می نماید. از قابلیت های این سامانه می توان به
                  مواردی نظیر مدیریت دسترسی متمرکز ،جلوگیری از چندگانگی داده های
                  سازمانی با استفاده از پایگاه داده متمرکز و گزارش‌گیری دوره ای
                  و لحظه ای اشاره کرد.
                </p>
              ) : (
                <p style={stylee} className="EN-FONT">
                  The software group of E-Source is a complete package of
                  financial and administrative software, exclusively developed
                  by Parham Kish Group of Companies experts, with the aim of
                  providing smart and creative services and solutions to
                  companies and organizations in order to improve the level of
                  productivity, efficiency and improve organizational
                  cooperation in them. About the E-Source system At the moment,
                  E-Source has offered the financial and treasury, recruitment,
                  payroll, warehouse, properties and assets, and store software
                  with capabilities exclusive to companies and organizations.
                  Since special attention has been paid to the current and
                  future needs of the managers of organizations and companies in
                  the design and production of these software, it helps the
                  managers of organizations and companies in the direction of
                  intelligent management of their organization.
                </p>
              )}
            </div>
          </div>
          <div
            className="row dirRev borderBottColor"
            style={{ overflow: "hidden" }}
          >
            <div
              className="col-xs-12 col-lg-4 productImage"
              style={{ overflow: "hidden" }}
            >
              <SingleProductEven
                source="https://s6.uupload.ir/files/product-4-min_uhel.jpg"
                num="4"
              />
            </div>
            <div className="col-xs-12 col-lg-8 productText productTxtEven">
            {
                LangId==="fa"?
                <div className="logoIm" style={stylee1}>
                <img
                  alt="logo4"
                  src="https://s6.uupload.ir/files/eshop-logo-min_del.png"
                ></img>
              </div>
                :
                <div className="logoIm" alt="logo1" style={stylee1}>
                <img src="https://s2.uupload.ir/files/eshop-logo-en_jt9s.png"></img>
              </div>
              }
             
              {LangId === "fa" ? (
                <p style={stylee}>
                  ایشاپ یک فروشگاه اینترنتی بوده که با امضا قرارداد با تامین
                  کنندگان کالا در سراسر کشور، امکان خرید کالا را با بهترین
                  کیفیت، تضمین اصالت و سریعترین زمان برای هموطنان عزیز فراهم
                  ساخته است. <br />
                  در این سامانه تامین کنندگان کالا می توانند محصولات خود را پس
                  از تایید ناظر مربوطه و ارائه ضمانت های لازم به معرض فروش
                  گذاشته و مشتریان نیز با مراجعه به این سامانه می توانند کالاهای
                  مورد نیاز خود را در کوتاهترین زمان ممکن خریداری کنند. در این
                  سامانه امکان خرید محصولات گوناگون با تضمین کیفیت و قیمت برای
                  افراد محیا بوده، مشتریان می توانند با مراجعه به دسته بندی کالا
                  ها به راحتی کالای مورد نظر خود را پیدا کرده، با یکدیگر مقایسه
                  کنند و پس از اطمینان از انتخاب کالا به راحتی عملیات خرید را
                  نهایی کنند.
                  وجود نظرات کارشناسان در کنار نظرات کاربران افراد را در تصمیم
                  گیری بسیار کمک کرده و می توانند با مطالعه نظرات صادقانه
                  کارشناسان و کاربرانی که تجربه استفاده از آن محصول را داشته
                  اند، بهترین انتخاب را انجام دهند.
                </p>
              ) : (
                <p style={stylee} className="EN-FONT">
                  E-Shop is an online store which has provided the opportunity
                  for customers to do the shopping in the shortest possible time
                  with highest quality and authenticity guaranty by signing
                  contracts with commodity suppliers across the country.
                  <br />
                  Commodity suppliers can sell their products on this system
                  after acquiring the approval of the relevant supervisor and
                  providing the necessary guarantees. By joining this system,
                  customers can buy the goods they need in the shortest possible
                  time. On this system, the ability to buy products carrying
                  price and quality guarantee is provided for customers. By
                  searching through the classification of goods on the system,
                  customers can easily find the product they want and compare it
                  with other products. Then, after making sure about their
                  purchase, they can easily finalize the purchase operation.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
