import "@/app/[locale]/styles/button.css";

type ButtonProps = {
  text: string;
  type: "submit" | "button";
  className?: string;
  onClick?: () => void;
  setIsOpen?: (value: (prev: boolean | null) => boolean) => void;
};

const Button = ({text, type, className, onClick, setIsOpen}: ButtonProps) => {
  const handleClick = () => {
    if (onClick)
      onClick();
    if (setIsOpen)
      setIsOpen(prev => !prev);
  };
  return <button type={type} className={`button ${className}`} onClick={handleClick}>{text}</button>
};
export default Button;