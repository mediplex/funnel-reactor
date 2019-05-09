import React from "react";
import Ditto from "../../ditto";

const Header = (props) => {
  return (
    <header>
      <Ditto data={props.data.content} />
    </header>
  );
};

export default Header;
