import React from 'react';
import { Container as MaterialContainer } from '@material-ui/core';
import Ditto from '../../ditto';

const Container = ({ data }) => {
  return (
    <MaterialContainer {...data.props}>
      <Ditto data={data.content} />
    </MaterialContainer>
  );
};

export default Container;
