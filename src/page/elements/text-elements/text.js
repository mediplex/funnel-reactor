import React from 'react';
import { Typography } from '@material-ui/core';

const Text = ({data}) => {
  return (
    // <Container>
    <Typography
      {...data.props}
      style={{ ...data.customStyle }}
      dangerouslySetInnerHTML={{ __html: data.content }}
    />
    // </Container>
  );
};

export default Text;
