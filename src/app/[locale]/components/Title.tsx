type TitleProps = {
  className: string;
  mainText: string;
  subText?: string;
};

const Title = ({mainText, subText, className}: TitleProps) => {
  return <h2 className={`${className} title_color`}>
    {mainText}
    <span className="partTitle_color">
        {subText}
      </span>
  </h2>
};
export default Title;