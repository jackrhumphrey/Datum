import React from "react";

const Slide: React.FunctionComponent<{
  title: string;
  subtitle: string;
}> = props => {
  return (
    <div className="slide">
      <div className="titleContainer">
        <div className="title">{props.title}</div>
        <div className="subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
};

export default Slide;
