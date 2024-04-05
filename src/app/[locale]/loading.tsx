import {useTranslations} from "next-intl";

const Loading = ()=>{
  const loading = useTranslations("Loading")
  return <h1 className="loading">{loading("title")}</h1>
};
export default Loading;