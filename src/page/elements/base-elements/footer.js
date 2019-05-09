import React from "react";
import Ditto from "../../ditto";

const Footer = props => {
  return (
    <footer>
      <Ditto data={props.data.content} />
    </footer>
  );
};

export default Footer;
