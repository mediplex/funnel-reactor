import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import Close from '@material-ui/icons/Close';
import ZoomIn from '@material-ui/icons/ZoomIn';
import Image from './image';

const styles = () => ({
  root: {
    position: 'relative',
    // width: "50%",
    transition: '.2s ease',
    '&:hover': { transform: 'scale(1.1)', zIndex: '2' }
  },
  overlay: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    height: '100%',
    width: '100%',
    opacity: '0',
    transition: '.5s ease',
    backgroundColor: '#000000aa',
    '&:hover': { opacity: '1' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: 4
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalClose: {
    position: 'fixed',
    right: '20px',
    top: '20px'
  }
});

const ImagePopup = props => {
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
          <ZoomIn />
        </div>
      </div>
      <Modal open={open}  onClose={handleClose} className={classes.modal}>
        <React.Fragment>
          <Image data={props.data.image.data} />
          <Fab size="small" className={classes.modalClose}>
            <Close onClick={handleClose} />
          </Fab>
        </React.Fragment>
      </Modal>
    </React.Fragment>
  );
};

export default withStyles(styles)(ImagePopup);
