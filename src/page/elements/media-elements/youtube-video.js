import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    margin: 0,
    padding: 0,
    display: "block",
    position: "relative",
    paddingTop: "56.25%"
  },
  iframe: {
    display: "block",
    height: "100%",
    width: "100%",
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    maxWidth: "100%"
  }
});

const YoutubeVideo = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <iframe
        title="video"
        className={classes.iframe}
        {...props}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      />
    </div>
  );
};

YoutubeVideo.defaultProps = {
  //   width: 560,
  //   height: 315,
  src: "https://www.youtube-nocookie.com/embed/3hj_r_N0qMs?start=54"
};

Image.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(YoutubeVideo);
