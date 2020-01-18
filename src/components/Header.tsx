import { ReactComponent as Logo } from "../dc-website-logos/dc-website-logo.svg";

import * as React from "react"; // to make JSX compile

type MenuProps = {
  collapsed: boolean;
  toggle: () => void;
};

const Header: React.FunctionComponent<MenuProps> = props => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <Logo height="100px" className="logoImage"></Logo>
        </div>
        {props.collapsed ? (
          <div className="right">
            <div className="upper">
              <div className="min" onClick={props.toggle}>
                +
              </div>
              <div className="line"></div>
            </div>
          </div>
        ) : (
          <div className="right">
            <div className="upper">
              <div className="max" onClick={props.toggle}>
                -
              </div>
              <div className="lineContainer">
                <div className="line"></div>
                <div className="links">
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Header;
