"use client";
import "@/app/[locale]/styles/menu.css";
import MenuSection from "@/app/[locale]/components/MenuSection";
import {MenuData} from "@/app/[locale]/data";

type MenuProps = {
  nameComponent: string;
  setNameComponent: (value: string) => void;
  className: string;
  isOpen?: boolean | null | undefined;
  setIsOpen?: ((value: (prev: boolean | null) => boolean) => void) | undefined;
};

const Menu = ({setNameComponent, nameComponent, className, isOpen, setIsOpen}: MenuProps) => {

  return <div className={`menu ${className}`}>
    {MenuData().map((element, index) => <MenuSection
      key={index}
      setNameComponent={setNameComponent}
      nameComponent={nameComponent}
      title={element.title}
      id={element.id}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />)}
  </div>
};
export default Menu;