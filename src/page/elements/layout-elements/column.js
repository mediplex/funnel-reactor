import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Ditto from "../../ditto";

const styles = theme => ({});

const Column = props => {
  return (
    <Grid
      item
      xs={props.data.size.xs}
      sm={props.data.size.sm}
      md={props.data.size.md}
      lg={props.data.size.lg}
      xl={props.data.size.xl}
      style={{ ...props.data.customStyle }}
    >
      <Ditto data={props.data.content} />
    </Grid>
  );
};

Column.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Column);
