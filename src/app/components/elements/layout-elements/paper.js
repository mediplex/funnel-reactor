import React from 'react';
import { Paper as MaterialPaper } from '@material-ui/core';
import Elements from "..";

const Paper = ({ data }) => {
  return (
    <MaterialPaper
      elevation={data.paper && data.paper.elevation}
      square={data.paper && data.paper.square}
    >
      <Elements elements={data.elements} />
    </MaterialPaper>
  );
};

export default Paper;
