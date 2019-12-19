import * as React from "react"; // to make JSX compile
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const TechnologyItem: React.FunctionComponent<{
  icon: any;
  title: string;
  content: string;
}> = props => {
  return (
    <div className="technologyItem">
      <SearchRoundedIcon fontSize="large" />
      <div className="padding">
        <div className="itemTitle">{props.title}</div>
      </div>
      <div className="itemContent">{props.content}</div>
    </div>
  );
};

export default TechnologyItem;
