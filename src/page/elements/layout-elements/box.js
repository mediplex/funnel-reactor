import React from 'react';
import { Box as MaterialBox } from '@material-ui/core';
import Ditto from '../../ditto';

const Box = ({ data }) => {
  return (
    <MaterialBox {...data.props}>
      <Ditto data={data.content} />
    </MaterialBox>
  );
};

export default Box;
