import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import Elements from './elements';

import * as actions from '../store/actions';

// import facebookPixel from './trackers/facebook-pixel';

import './data';

const PublicPage = ({
  match,
  history,
  loading,
  currentPublicPage,
  fetchPublicPage,
  currentCustomDomainName,
  fetchCustomDomainName,
  setLoading
}) => {
  useEffect(() => {
    if (currentCustomDomainName) {
      if (currentPublicPage) {
        setLoading(false);
      } else {
        setLoading(true);
        const customPagePointer = currentCustomDomainName.customPagePointers.find(
          p => p.path === (match.params.slug || '')
        );
        if (customPagePointer && customPagePointer.publicPageId) fetchPublicPage(customPagePointer.publicPageId);
        else history.push('page-not-found');
      }
    } else {
      setLoading(true);
      fetchCustomDomainName();
    }
  }, [setLoading, currentCustomDomainName, fetchCustomDomainName, currentPublicPage, fetchPublicPage, match, history]);

  return loading ? <div>loading data...</div> : <Elements elements={currentPublicPage.data.elements} />;
};

const mapStateToProps = state => ({
  loading: state.loading,
  currentPublicPage: state.currentPublicPage,
  currentCustomDomainName: state.currentCustomDomainName
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setLoading: loading => dispatch(actions.setLoading(loading)),
  fetchCustomDomainName: () => dispatch(actions.fetchCustomDomainName(ownProps.history)),
  setCurrentCustomDomainName: currentCustomDomainName =>
    dispatch(actions.setCurrentCustomDomainName(currentCustomDomainName)),
  fetchPublicPage: publicPageId => dispatch(actions.fetchPublicPage(publicPageId, ownProps.history)),
  setCurrentPublicPage: publicPage => dispatch(actions.setCurrentPublicPage(publicPage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicPage);
