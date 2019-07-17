import React from 'react';
import { Typography as MaterialTypography } from '@material-ui/core';

const Typography = ({ data }) => {
  return (
    <MaterialTypography
      style={{ ...data.customStyle }}
      {...data.props}
      component="div"
      dangerouslySetInnerHTML={{ __html: data.html }}
    />
  );
};

export default Typography;
