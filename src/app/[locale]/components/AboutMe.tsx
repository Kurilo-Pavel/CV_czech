import "@/app/[locale]/styles/aboutMe.css";
import AboutMeBlock from "@/app/[locale]/components/AboutMeBlock";
import {AboutMeData} from "@/app/[locale]/data";
import Title from "@/app/[locale]/components/Title";
import {useTranslations} from "next-intl";

const AboutMe = () => {
  const translate = useTranslations("About_me");

  return <div className="section aboutMe__section" data-value="About me">
    <Title mainText= {translate("mainTitle")} subText= {translate("subTitle")} className="title"/>
    <div className="aboutMe__info">
      <p className="text text_color">
        {translate("text")}
      </p>
    </div>
    <div className="aboutMe__personalInfo">
      <p className="aboutMe__list partTitle_color text">
        {translate("ageTitle")}
        <span className="text_color">35</span></p>
      <p className="aboutMe__list partTitle_color text">
        {translate("addressTitle")}
        <span className="text_color"> {translate("address")}</span>
      </p>
      <p className="aboutMe__list partTitle_color text">
        e-mail:
        <a href="mailto:externiajtak@gmail.com" className="text_color link">externiajtak@gmail.com</a>
      </p>
      <p className="aboutMe__list partTitle_color text">
        {translate("phoneTitle")}
        <a href="tel:+420 732 626 806" className="text_color link">+420 732 626 806</a>
      </p>

    </div>
    <div className="aboutMe__action">
      <Title
        mainText={translate("sectionTitle")}
        subText={translate("sectionSubTitle")}
        className="subTitle"
      />
    </div>
    <div className="aboutMe__responsibility">
      {AboutMeData().map((block, index) => <AboutMeBlock title={block.title} text={block.text} key={index}/>)}
    </div>
  </div>
};
export default AboutMe;