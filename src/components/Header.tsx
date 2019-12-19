import * as React from "react"; // to make JSX compile

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="links">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>
    </div>
  );
};

export default Header;
