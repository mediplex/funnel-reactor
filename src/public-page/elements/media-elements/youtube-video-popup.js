import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Image from "./image";
import YoutubeVideo from "./youtube-video";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import Close from "@material-ui/icons/Close";
import PlayArrow from "@material-ui/icons/PlayArrow";
const styles = () => ({
  root: {
    position: "relative",
    // width: "50%",
    transition: ".2s ease",
    "&:hover": { transform: "scale(1.2)", zIndex: "2" }
  },
  overlay: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    height: "100%",
    width: "100%",
    opacity: "0",
    transition: ".5s ease",
    backgroundColor: "#000000aa",
    "&:hover": { opacity: "1" }, // the icon should be always opacity = 1
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalClose: {
    position: "fixed",
    right: "20px",
    top: "20px"
  }
});

const YoutubeVideoPopup = props => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root} style={{ ...props.data.customStyle }}>
        <Image data={props.data.thumbnail.data} />
        <div className={classes.overlay} onClick={handleOpen}>
          <PlayArrow />
        </div>
      </div>
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <React.Fragment>
          <YoutubeVideo data={props.data.youtubeVideo.data} />

          {/* <iframe
            title="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uQYgEPXFWNo"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> */}
          <Fab size="small" className={classes.modalClose}>
            <Close onClick={handleClose} />
          </Fab>
        </React.Fragment>
      </Modal>
    </React.Fragment>
  );
};

YoutubeVideoPopup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(YoutubeVideoPopup);
