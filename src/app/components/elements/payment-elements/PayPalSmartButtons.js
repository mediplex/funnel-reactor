import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const PayPalSmartButtons = ({ data }) => {
  const [isSdkReady, setIsSdkReady] = useState(false);
  const addPaypalSdk = () => {
    const queryParams = [];

    // replacing camelCase with dashes
    Object.keys(data.options).forEach(key => {
      const name = key
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase();
      queryParams.push(`${name}=${data.options[key]}`);
    });

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.paypal.com/sdk/js?${queryParams.join('&')}`;
    script.defer = true;
    script.onload = () => {
      setIsSdkReady(true);
    };

    script.onerror = () => {
      throw new Error('Paypal SDK could not be loaded.');
    };

    document.body.appendChild(script);
  };

  if (typeof window !== 'undefined' && window !== undefined && window.paypal === undefined) {
    console.log('[PAYPAL] SDK NOT READY');
    addPaypalSdk();
  } else if (typeof window !== 'undefined' && window !== undefined && window.paypal !== undefined) {
    console.log('[PAYPAL] SDK READY');
  }

  if (!isSdkReady && (typeof window === 'undefined' || window.paypal === undefined)) {
    return <div>Paypal not ready yet</div>;
  }

  const PayPalButtons = window.paypal.Buttons.driver('react', {
    React,
    ReactDOM
  });

  return <PayPalButtons />;
};

export default PayPalSmartButtons;
