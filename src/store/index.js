import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './configure-store';

// import code from '../public-page/data/custom-domains/code';
// import DmNZG8yWl6zMgv6DroNH from '../public-page/data/public-pages/DmNZG8yWl6zMgv6DroNH';
// import SGq3kXQmScOUCXHmRLzV from '../public-page/data/public-pages/SGq3kXQmScOUCXHmRLzV';

const initialState = {
  loading: true,
  basicForms: {},
  basicFormStates: {},
  currentPublicPage: undefined,
  currentCustomDomainName: undefined
};

const store = configureStore(initialState);

const Store = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Store;
