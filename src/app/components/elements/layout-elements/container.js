import React from 'react';
import { Container as MaterialContainer } from '@material-ui/core';
import Elements from "..";

const Container = ({ data }) => {
  return (
    <MaterialContainer {...data.props}>
      <Elements elements={data.elements} />
    </MaterialContainer>
  );
};

export default Container;
