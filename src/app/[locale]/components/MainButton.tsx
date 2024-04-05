import "@/app/[locale]/styles/mainButton.css";
import {BlockSection} from "@/app/[locale]/constants.mjs";
import {useTranslations} from "next-intl";

type MainButtonProps = {
  nameComponent: string;
  setNameComponent: (value: string) => void
}

const MainButton = ({nameComponent, setNameComponent}: MainButtonProps) => {

  const menu = useTranslations("Menu");

  const prevSection = () => {
    const index = BlockSection.indexOf(nameComponent);
    if (index === BlockSection.length - 1) {
      setNameComponent(BlockSection[0]);
    } else {
      setNameComponent(BlockSection[index + 1]);
    }
  };

  const nextSection = () => {
    const index = BlockSection.indexOf(nameComponent);
    if (index === 0) {
      setNameComponent(BlockSection[BlockSection.length - 1]);
    } else {
      setNameComponent(BlockSection[index - 1]);
    }
  };

  return <div className="mainButton">
    <div className="mainButton__section" onClick={nextSection}>
      <img src="/icons/ArrowBack.png" alt="Back" className="mainButton__icon mainButton__icon_visible"/>
      <img src="/icons/ArrowBackWhite.png" alt="Back" className="mainButton__icon mainButton__icon_hidden"/>
      <p className="arrow__text arrow__text_hidden">{menu("prev")}</p>
    </div>
    <div className="mainButton__section" onClick={prevSection}>
      <img src="/icons/Arrow.png" alt="Ahead" className="mainButton__icon mainButton__icon_visible"/>
      <img src="/icons/ArrowWhite.png" alt="Ahead" className="mainButton__icon mainButton__icon_hidden"/>
      <p className="arrow__text arrow__text_hidden">{menu("next")}</p>
    </div>
  </div>
};
export default MainButton;