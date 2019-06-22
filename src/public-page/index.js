import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { docData } from 'rxfire/firestore';
import { switchMap, tap, map } from 'rxjs/operators';
import { hostname } from 'os';
import { firestore } from '../firebase';

import Elements from './elements';

// import facebookPixel from './trackers/facebook-pixel';

// import './data';

import DmNZG8yWl6zMgv6DroNH from './data/public-pages/DmNZG8yWl6zMgv6DroNH'

const PublicPage = ({
  match,
  history,
  loading,
  currentPublicPage,
  currentCustomDomainName,
  setLoading,
  setCurrentCustomDomainName,
  setCurrentPublicPage
}) => {
  useEffect(() => {
    setLoading(true);
    setCurrentPublicPage(DmNZG8yWl6zMgv6DroNH);

    // const customDomainRef = firestore.collection('custom-domains').doc(hostname());
    // const customDomain$ = docData(customDomainRef);

    // const subscription = customDomain$
    //   .pipe(
    //     tap(customDomainName => {
    //       if (!customDomainName.customPagePointers) history.push('/page-not-found');
    //       else dispatch.setCurrentCustomDomainName(customDomainName);
    //     }),
    //     map(({ customPagePointers }) => customPagePointers.find(p => p.path === (match.params.slug || ''))),
    //     tap(customPagePointer => {
    //       if (!customPagePointer) history.push('/page-not-found');
    //     }),
    //     tap(customPagePointer => {
    //       if (!customPagePointer.path) history.push('/page-not-found');
    //     }),
    //     switchMap(({ publicPageId }) => {
    //       const publicPageRef = firestore.collection('public-pages').doc(publicPageId);
    //       const publicPage$ = docData(publicPageRef);
    //       return publicPage$;
    //     }),
    //     tap(publicPage => {
    //       if (!publicPage.data) history.push('/page-not-found');
    //     })
    //   )
    //   .subscribe(
    //     publicPage => {
    //       dispatch.setCurrentPublicPage(publicPage);
    //       dispatch.setLoading(false);
    //     },
    //     error => console.log(error)
    //   );

    setLoading(false);

    // return () => subscription.unsubscribe();
  }, [match.params.slug, history]);

  return loading ? <div>loading data...</div> : <Elements elements={currentPublicPage.data.elements} />;
};

const mapStateToProps = state => ({
  loading: state.loading,
  currentPublicPage: state.currentPublicPage,
  currentCustomDomainName: state.currentCustomDomainName
});

const mapDispatchToProps = dispatch => ({
  setLoading: loading => dispatch({ type: 'SET_LOADING', payload: loading }),
  setCurrentCustomDomainName: currentCustomDomainName =>
    dispatch({ type: 'SET_CURRENT_CUSTOM_DOMAIN_NAME', payload: currentCustomDomainName }),
  setCurrentPublicPage: publicPage => dispatch({ type: 'SET_CURRENT_PUBLIC_PAGE', payload: publicPage })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicPage);
