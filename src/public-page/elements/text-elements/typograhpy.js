import React from 'react';
import { Typography as MaterialTypography } from '@material-ui/core';

const Typography = ({data}) => {
  return (
    // <Container>
    <MaterialTypography
      {...data.props}
      style={{ ...data.customStyle }}
      dangerouslySetInnerHTML={{ __html: data.html }}
    />
    // </Container>
  );
};

export default Typography;
