import * as React from "react"; // to make JSX compile

const TeamItem: React.FunctionComponent<{
  photo: string;
  name: string;
  role: string;
  description: string;
}> = props => {
  return (
    <div className="teamItem">
      <img alt={props.name} src={props.photo} className="teamPhoto" />
      <div className="padding">
        <div className="itemTitle">{props.name}</div>
        <div className="itemSubtitle">{props.role}</div>
      </div>
      <div className="itemContent">{props.description}</div>
    </div>
  );
};

export default TeamItem;
