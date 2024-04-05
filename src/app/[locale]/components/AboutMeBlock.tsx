type AboutMeBlockProps = {
  title: string;
  text: string;
}
const AboutMeBlock = ({title,text}:AboutMeBlockProps) => {
  return <div className="aboutMe__block" >
    <h4 className="aboutMe_title title_color">
      {title}
    </h4>
    <p className="text text_color">
      {text}
    </p>
  </div>
};
export default AboutMeBlock;