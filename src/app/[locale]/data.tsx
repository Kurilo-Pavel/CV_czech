import {useTranslations} from "next-intl";

const MenuData = () => {
  const menu = useTranslations("Menu");
  return [
    {
      title: menu("home"),
      id: "Home"
    },
    {
      title: menu("aboutMe"),
      id: "About me"
    },
    {
      title: menu("resume"),
      id: "Resume"
    },
    // {
    //   title: menu("portfolio"),
    //   id: "Portfolio"
    // },
    {
      title: menu("contact"),
      id: "Contact"
    },
  ];
};

const AboutMeData = () => {
  const translate = useTranslations("About_me");
  return [
    {
      title: translate("titleDevelop"),
      text: translate("contentDevelop")
    }, {
      title: translate("titleOptimization"),
      text: translate("contentOptimization")
    }, {
      title: translate("titleApi"),
      text: translate("contentApi")
    }, {
      title: translate("titleUpdate"),
      text: translate("contentUpdate")
    }, {
      title: translate("titlePartnership"),
      text: translate("contentPartnership")
    }, {
      title: translate("titleStudying"),
      text: translate("contentStudying")
    }, {
      title: translate("titleTesting"),
      text: translate("contentTesting")
    }, {
      title: translate("titleStandard"),
      text: translate("contentStandard")
    },
  ];
};

const ResumeData = () => {
  const resume = useTranslations("Resume");
  return [
    {
      month: resume("march"),
      year: "2021",
      school: resume("academy"),
      curs: resume("HTML")
    },
    {
      month: resume("september"),
      year: "2021",
      school: resume("academy"),
      curs: resume("JS")
    },
    {
      month: resume("february"),
      year: "2022",
      school: resume("academy"),
      curs: resume("React")
    },
    {
      month: resume("september"),
      year: "2023",
      school: resume("academy"),
      curs: resume("Node")
    },
  ];
};

const Skills = [
  "HTML", "CSS (Sass)", "JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "Node.js", "Express.js", "Git"
];

const WorkWith = [
  "MySQL", "Npm", "Swagger", "Postman", "Figma", "Scrum", "Jira, Confluence"
];

export {MenuData, AboutMeData, ResumeData, Skills, WorkWith};