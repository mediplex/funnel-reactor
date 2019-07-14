import React from 'react';
import { Typography as MaterialTypography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

// var rAmp = /&/g;
// var rLt = /</g;
// var rApos = /\'/g;
// var rQuot = /\"/g;
// var hChars = /[&<>\"\']/;

const sanitizefunction = str => {
  if (str == null) {
    return str;
  }

  if (typeof str !== 'string') {
    str = String(str);
  }

  if (/[&<>\"\']/.test(String(str))) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/\'/g, '&apos;')
      .replace(/[&<>\"\']/, '&quot;');
  } else {
    return str;
  }
};

const Typography = ({ data }) => {
  const classes = makeStyles({
    root: { ...data.customStyle }
  });

  return (
    // <div dangerouslySetInnerHTML={{ __html: data.html }} />
    <MaterialTypography
      className={classes.root}
      {...data.props}
      component="div"
      dangerouslySetInnerHTML={{ __html: data.html }}
    />
  );
};

export default Typography;
