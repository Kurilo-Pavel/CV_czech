import classNames from "classnames";
import {useLocale} from "next-intl";

type LanguageButtonProps = {
  text: string;
  changeLanguage: (value: string) => void;
}

const LanguageButton = ({text, changeLanguage}: LanguageButtonProps) => {
  const locale = useLocale();
  return <span
    className={classNames("language__button", {"language__button_active": locale === text})}
    onClick={() => changeLanguage(text)}
  >
      {text}
    </span>
};
export default LanguageButton;