import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const styles = theme => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center top",
    backgroundSize: "cover"
    // [theme.breakpoints.down('sm')]: {
    //   paddingTop: theme.spacing(6),
    //   paddingBottom: theme.spacing(6)
    // },
    // [theme.breakpoints.up('md')]: {
    //   paddingTop: theme.spacing(9),
    //   paddingBottom: theme.spacing(9)
    // }
  }
});

const Hero = props => {
  const contentHeight = () => {
    const size = () => {
      switch (props.data.size) {
        case "full-height":
          return "100vh";
        case "half-height":
          return "50vh";
        case "one-quarter-height":
          return "25vh";
        case "two-quarter-height":
          return "50vh";
        case "three-quarter-height":
          return "75vh";
        case "one-third-height":
          return "33vh";
        case "two-third-height":
          return "66vh";
        default:
          return null;
      }
    };
    return {
      minHeight: size()
    };
  };

  let { classes } = props;

  return (
    <div className={classes.root} style={{ ...props.data.customStyle }}>
      <Container>
        <Grid
          style={contentHeight()}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item size={12}>
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom
            >
              How to cash out your bitcoin in three steps?
            </Typography>
            <Typography component="p" color="inherit" paragraph>
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what&apos;s most interesting in this
              post&apos;s contents…
            </Typography>
            <Button size="large" variant="contained" color="secondary">
              Call To Action
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);