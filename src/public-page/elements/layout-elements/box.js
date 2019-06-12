/* eslint-disable import/no-cycle */

import React from 'react';
import { Box as MaterialBox } from '@material-ui/core';
import Elements from '../../elements';

const Box = ({ data }) => {
  return (
    <MaterialBox {...data.props}>
      <Elements elements={data.elements} />
    </MaterialBox>
  );
};

export default Box;
