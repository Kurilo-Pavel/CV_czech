type ResumeBlockProps = {
  month: string;
  year: string;
  curs: string;
  school:string;
};

const ResumeBlock = ({month, year, curs,school}: ResumeBlockProps) => {
  return <div className="resume__block">
    <div className="resume__period">
      <p className="period__name title_color">
        {month}
        <span className="partTitle_color">{year}</span>
      </p>
    </div>
    <div className="resume__line">
      <span className="resume__circle circle_small"/>
      <span className="resume__circle circle_big"/>
    </div>
    <div className="resume__education">
    <p className="title_color">
      {curs}
    </p>
      <p className="text_color">
        {school}
      </p>
    </div>
  </div>
};
export default ResumeBlock;