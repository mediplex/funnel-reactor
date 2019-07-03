import { hostname } from 'os';
import { firestore } from '../../firebase';

export const SET_CURRENT_CUSTOM_DOMAIN_NAME = 'SET_CURRENT_CUSTOM_DOMAIN_NAME';

export const setCurrentCustomDomainName = currentCustomDomainName => ({
  type: SET_CURRENT_CUSTOM_DOMAIN_NAME,
  payload: currentCustomDomainName
});

export const fetchCustomDomainName = history => dispatch => {
  firestore
    .collection('custom-domains')
    .doc(hostname())
    .get()
    .then(doc => {
      if (doc.exists) {
        dispatch(setCurrentCustomDomainName(doc.data()));
      } else {
        history.push('custom-domain-name-error');
      }
    })
    .catch(error => console.error('Error getting document:', error));
};
