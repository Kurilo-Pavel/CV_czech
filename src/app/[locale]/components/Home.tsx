import "@/app/[locale]/styles/home.css";
import {useTranslations} from "next-intl";

const Home = () => {
  const myCard = useTranslations("My_card");

  return <div className="section home__section" data-value="Home">
    <div className="home__info">
      <h1 className="home__name">{myCard("myName")}</h1>
      <h2 className="home__profession">{myCard("mySpeciality")}</h2>
    </div>
  </div>
};
export default Home;