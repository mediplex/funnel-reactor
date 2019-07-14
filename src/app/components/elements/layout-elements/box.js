/* eslint-disable import/no-cycle */

import React from 'react';
import { default as MaterialBox } from '@material-ui/core/Box';
// import { default as MaterialPaper } from '@material-ui/core/Paper';

import Elements from '..';

const Box = ({ data }) => {
  return (
    // <MaterialPaper
    //   elevation={data.paper && data.paper.elevation}
    //   square={data.paper && data.paper.square}
    // >
      <MaterialBox {...data.props}>
        <Elements elements={data.elements} />
      </MaterialBox>
    // </MaterialPaper>
  );
};

export default Box;
