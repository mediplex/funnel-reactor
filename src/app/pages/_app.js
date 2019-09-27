import React from 'react';
import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';

class _App extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      // <Container>
        <CssBaseline />
        <Component {...pageProps} />
      // </Container>
    );
  }
}

export default _App;
