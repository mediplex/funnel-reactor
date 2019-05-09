import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Ditto from "../../ditto";

const styles = theme => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(0)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(0)
    }
  }
});

const Columns = (props) => {
    const { classes } = props;
    return (
      <div className={classes.root} style={{...props.data.customStyle}}>
        <Grid container>
          <Ditto data={props.data.content} />
        </Grid>
      </div>
    );

}

Columns.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Columns);
