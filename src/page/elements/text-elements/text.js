import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Text = props => {
  return (
    <Container>
      <Typography
        {...props.data.props}
        style={{ ...props.data.customStyle }}
        dangerouslySetInnerHTML={{ __html: props.data.content }}
        gutterBottom
      />
    </Container>
  );
};

export default Text;
