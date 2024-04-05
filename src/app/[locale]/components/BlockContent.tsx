import "@/app/[locale]/styles/blockContent.css";
import AboutMe from "@/app/[locale]/components/AboutMe";
import Home from "@/app/[locale]/components/Home";
import Resume from "@/app/[locale]/components/Resume";
import Portfolio from "@/app/[locale]/components/Portfolio";
import Contact from "@/app/[locale]/components/Contact";

const BlockContent = () => {
  return <div className="blockContent">
    <Home/>
    <AboutMe/>
    <Resume/>
    {/*<Portfolio/>*/}
    <Contact/>
  </div>
};
export default BlockContent;