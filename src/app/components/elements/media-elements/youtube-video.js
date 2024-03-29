//! Resources https://developers.google.com/youtube/iframe_api_reference

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const styles = () => ({
  root: {
    margin: 0,
    padding: 0,
    display: 'block',
    position: 'relative',
    paddingTop: '56.25%',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%'
  },
  iframe: {
    display: 'block',
    height: '100%',
    bottom: '0',
    left: '0',
    position: 'absolute',
    right: '0',
    top: '0',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%'
  }
});

const YoutubeVideo = props => {
  const { classes } = props;
  return (
    <Container>
      <div className={classes.root}>
        <iframe
          title="video"
          className={classes.iframe}
          {...props.data.props}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        />
      </div>
    </Container>
  );
};



export default withStyles(styles)(YoutubeVideo);
