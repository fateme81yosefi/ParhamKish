import React , {useContext} from "react";
import { LangContext } from "../../shared/LanguageContext";
import HomeEn from "../home/HomeEn";
import HomeFa from "../home/HomeFa";

export default function HomeMain(){

      const [LangId, setLangId] = useContext(LangContext);

    return(
        LangId==="fa"? <HomeFa/> : <HomeEn/>

    );

}