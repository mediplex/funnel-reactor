import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Ditto from "../../ditto";

const styles = theme => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9)
    }
  }
});

const Section = (props) => {
    const { classes } = props;

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

    return (
      <section className={classes.root} style={{...props.data.customStyle}}>
        <Container maxWidth="md">
          <Grid
            container
            style={contentHeight()}
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Ditto data={props.data.content} />
          </Grid>
        </Container>
      </section>
    );
  };

Section.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Section);
