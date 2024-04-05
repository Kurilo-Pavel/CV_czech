type MenuSectionProps = {
  setNameComponent: (value: string) => void;
  nameComponent: string;
  title: string;
  id: string
  isOpen?: boolean | null | undefined;
  setIsOpen?: ((value: (prev: boolean | null) => boolean) => void) | undefined;

};

const MenuSection = ({setNameComponent, nameComponent, isOpen, setIsOpen, title, id}: MenuSectionProps) => {

  return <div
    className="menu__section"
    data-value={id}
    onClick={() => {
      setNameComponent(id);
      if (setIsOpen)
        setIsOpen((prev) => !prev);
    }}
  >
    <img
      src={`/icons/${id}.png`}
      alt={title}
      className={`menu__icon ${nameComponent === id ? "" : "menu__icon_visible"}`}
    />
    <img
      src={`/icons/${id}White.png`}
      alt={title}
      className={`menu__icon ${nameComponent === id ? "visible" : "menu__icon_hidden"}`}
    />
    <p className="menu__name menu__name_hidden">{title}</p>
  </div>
};
export default MenuSection;