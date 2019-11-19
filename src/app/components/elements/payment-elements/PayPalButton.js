import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import {
  Button as MaterialButton,
  Dialog as MaterialDialog,
  DialogTitle as MaterialDialogTitle
} from '@material-ui/core';

const PayPalSmartButtons = dynamic(import('./PayPalSmartButtons'));
// import { PayPalSmartButtons } from './PayPalSmartButtons'

export const PayPalButton = ({ data }) => {
  // popup
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log('closed');
  };

  // paypal

  return (
    <>
      <MaterialButton variant="contained" color="primary" onClick={handleClickOpen}>
        Buy Now
      </MaterialButton>

      <MaterialDialog onClose={handleClose} open={open}>
        <MaterialDialogTitle id="simple-dialog-title">Please select your prefered payment method</MaterialDialogTitle>
        <PayPalSmartButtons data={data} />
      </MaterialDialog>
    </>
  );
};

export default PayPalButton;
