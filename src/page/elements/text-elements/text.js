import React from "react";
import { Typography } from "@material-ui/core";

const Text = props => {
  return (
    <Typography
      {...props.data.props}
      style={{ ...props.data.customStyle }}
          dangerouslySetInnerHTML={{ __html: props.data.content }}
          gutterBottom
    />
  );
};

export default Text;
