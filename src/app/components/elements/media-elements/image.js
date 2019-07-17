import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  figure: {
    margin: 0,
    padding: 0,
    display: 'block',
    position: 'relative'
  },
  img: {
    display: 'block',
    height: 'auto',
    width: '100%',
    borderRadius: 4
  }
});

const Image = ({ data, classes }) => {
  // figure + caption + size

  return (
    <figure className={classes.figure} style={data.customStyle && { ...data.customStyle }}>
      {/* eslint-disable-next-line */}
      <img className={classes.img} {...data.props} />
    </figure>
  );
};

export default withStyles(styles)(Image);
