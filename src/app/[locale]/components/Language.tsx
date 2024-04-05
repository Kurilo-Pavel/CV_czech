import "@/app/[locale]/styles/language.css";
import LanguageButton from "@/app/[locale]/components/LanguageButton";
// import {useTransition} from "react";
import {useRouter, usePathname} from "@/navigation";

type LanguageProps = {
  setIsOpen: (value: (prev: boolean | null) => boolean) => void;
};
const Language = ({setIsOpen}: LanguageProps) => {

  const pathname = usePathname();
  const router = useRouter();
  // const [isPending, startTransition] = useTransition();

  const changeLanguage = (language:string) => {
    setIsOpen(prev => !prev);
    // startTransition(() => {
    router.replace({pathname}, {locale: language});
    // });
  };

  return <div className="language">
    <LanguageButton changeLanguage={changeLanguage} text="ru"/>
    <LanguageButton changeLanguage={changeLanguage} text="en"/>
    <LanguageButton changeLanguage={changeLanguage} text="pl"/>
  </div>
};
export default Language;