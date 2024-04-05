import "@/app/[locale]/styles/myCard.css";
import Button from "@/app/[locale]/components/Button";
import {Url} from "@/app/[locale]/constants.mjs";
import Language from "@/app/[locale]/components/Language";
import {useLocale, useTranslations} from "next-intl";
import Menu from "@/app/[locale]/components/Menu";
import classNames from "classnames";

type MyCardProps = {
  nameComponent: string,
  setNameComponent: (value: string) => void;
  isOpen: boolean | null;
  setIsOpen: (value: (prev: boolean | null) => boolean) => void;
};

const MyCard = ({nameComponent, setNameComponent, isOpen, setIsOpen}: MyCardProps) => {
  const button = useTranslations("Button");
  const myCard = useTranslations("My_card");
  const locale = useLocale();

  const sendFile = async () => {
    const response = await fetch(Url + `/downloadCV/${locale}`);
    const data = await response.blob();
    let file = document.createElement("a");
    file.href = URL.createObjectURL(new Blob([data]));
    file.download = `Kurilo_Pavel_${locale}.pdf`;
    file.click();
  }

  return <div className={classNames("myCard", {"myCard__hidden": isOpen === false, "myCard__visible": isOpen})}>
    < div className="myCard__info">
      <div className="myCard__photoWrapper">
        <img src="./photo.jpg" alt="my_photo" className="myCard__photo"/>
      </div>
      <p className="myCard__name">{myCard("myName")}</p>
      <p className="myCard__profession">{myCard("mySpeciality")}</p>
    </div>
    <Menu
      nameComponent={nameComponent}
      setNameComponent={setNameComponent}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="menu_hidden"
    />
    <div className="myCard__block">
      <Language
        setIsOpen={setIsOpen}
      />
      <Button
        type="button"
        text={button("title")}
        onClick={sendFile}
        setIsOpen={setIsOpen}
      />
    </div>
  </div>
};
export default MyCard;