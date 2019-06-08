import React from 'react';
import { Paper as MaterialPaper } from '@material-ui/core';
import Elements from '..';

const Paper = ({data}) => {
  return (
    <MaterialPaper>
      <Elements elements={data.elements} />
    </MaterialPaper>
  );
};

export default Paper;
