import React from 'react';
import { Box, Container } from '@material-ui/core';
import Ditto from '../../ditto';

const useBoxConfig = () => ({
  root: {
    // my: { xs: 1, sm: 2, md: 4, lg: 6, xl: 6 },
    py: { xs: 2, sm: 4, md: 8, lg: 12, xl: 12 },
    display: 'flex',
    flexDirection: 'column'
  }
});

const useStyles = customStyle => {
  let style = {
    root: {
      'box-sizing': 'border-box'
    }
  };

  style.root = { ...style, ...customStyle };

  return style;
};

const Section = props => {
  const boxConfig = useBoxConfig();
  const classes = useStyles(props.data.customStyle);

  return (
    <Box
      component={props.data.HtmlElement ? props.data.HtmlElement : 'section'}
      style={classes.root}
      {...boxConfig.root}
    >
      <Container maxWidth={props.data.contentMaxWidth ? props.data.contentMaxWidth : 'md'}>
        <Ditto data={props.data.content} />
      </Container>
    </Box>
  );
};

export default Section;
