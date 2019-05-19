import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  figure: {
    margin: 0,
    padding: 0,
    display: "block",
    position: "relative"
  },
  img: {
    display: "block",
    height: "auto",
    width: "100%"
  }
});

// const ThisWillWork = forwardRef((props, ref) => {
//   return <button ref={ref}>Text</button>;
// });

const Image = props => {
  const { classes } = props;
  // figure + caption + size

  return (
    <figure className={classes.figure} style={{ ...props.data.customStyle }}>
      {/* eslint-disable-next-line */}
      <img   className={classes.img} {...props.data.props} />
    </figure>
  );
};

Image.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Image);
