import * as React from "react"; // to make JSX compile

type MenuProps = {
  collapsed: boolean;
  toggle: () => void;
};

const Header: React.FunctionComponent<MenuProps> = props => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="right">
        {props.collapsed ? (
          <div className="links">
            <div className="min" onClick={props.toggle}>
              +
            </div>
          </div>
        ) : (
          <div className="links">
            <div className="max" onClick={props.toggle}>
              -
            </div>
            <div>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
