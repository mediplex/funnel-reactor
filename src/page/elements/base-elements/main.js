import React from "react";
import Ditto from "../../ditto";

const Main = (props) => {
  return (
    <main>
      <Ditto data={props.data.content} />
    </main>
  );
};

export default Main;
