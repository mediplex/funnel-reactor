import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Ditto from "../../ditto";

const styles = theme => ({});

const Column = props => {
  return (
    <Grid item {...props.data.size} style={{ ...props.data.customStyle }}>
      <Ditto data={props.data.content} />
    </Grid>
  );
};

Column.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Column);
