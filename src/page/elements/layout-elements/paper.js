import React from 'react';
import { Paper as MaterialPaper } from '@material-ui/core';
import Ditto from '../../ditto';

const Paper = ({data}) => {
  return (
    <MaterialPaper>
      <Ditto data={data.content} />
    </MaterialPaper>
  );
};

export default Paper;
