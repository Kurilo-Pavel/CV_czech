import "@/app/[locale]/styles/resume.css";
import Title from "@/app/[locale]/components/Title";
import ResumeBlock from "@/app/[locale]/components/ResumeBlock";
import {ResumeData, Skills, WorkWith} from "@/app/[locale]/data";
import {useTranslations} from "next-intl";

const Resume = () => {
  const menu = useTranslations("Menu");
  const resume = useTranslations("Resume");

  return <div className="section resume__section" data-value="Resume">
    <Title className="title" mainText={menu("resume")}/>
    <div className="resume__content">
      <div className="resume__column">
        <Title className="subTitle" mainText={resume("education")}/>
        <div>
          {ResumeData().map((data, index) =>
            <ResumeBlock key={index} school={data.school} month={data.month} curs={data.curs} year={data.year}/>)}
        </div>
      </div>
      <div className="resume__skills">
        <div className="resume__column">
          <Title mainText={resume("titleSkills")} subText={resume("subTitleSkills")} className="subTitle"/>
          <div>
            {Skills.map((data, index) => <li className="resume__list text_color" key={index}>{data}</li>)}
          </div>
        </div>
        <div className="resume__column">
          <Title mainText={resume("titleWork")} subText={resume("subTitleWork")} className="subTitle"/>
          <div>
            {WorkWith.map((data, index) => <li className="resume__list text_color" key={index}>{data}</li>)}
          </div>
        </div>
      </div>
    </div>
  </div>
};
export default Resume;