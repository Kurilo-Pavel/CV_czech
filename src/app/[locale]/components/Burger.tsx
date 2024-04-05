import "@/app/[locale]/styles/burger.css";
import classNames from "classnames";

type BurgerProps = {
  isOpen: boolean | null;
  setIsOpen: (value: (prev: boolean | null) => boolean) => void;
};

const Burger = ({isOpen, setIsOpen}: BurgerProps) => {
  return <div className="burger" onClick={() => setIsOpen((prev) => !prev)}>
    <span className={classNames("menu_burger", {"burger__cross": isOpen})}/>
  </div>
};
export default Burger;