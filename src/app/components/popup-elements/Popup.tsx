import { Button, Modal, Fab } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import { useState } from "react";


export const Popup = ({ data }) => {
  const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    
  return (
    <div>
      <Button onClick={handleOpen}>{data.props.content}</Button>
       <Modal open={open} onClose={handleClose}>
        <>
          {/* elements */}
          <Fab size="small" style={{
            position: "fixed",
            right: "20px",
            top: "20px"}}>
            <Close onClick={handleClose} />
          </Fab>
        </>
      </Modal>
    </div>
  )
  
}

export default Popup;