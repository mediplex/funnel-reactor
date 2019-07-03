import { firestore } from '../../firebase';

export const SET_CURRENT_PUBLIC_PAGE = 'SET_CURRENT_PUBLIC_PAGE';

export const setCurrentPublicPage = publicPage => ({ type: SET_CURRENT_PUBLIC_PAGE, payload: publicPage });

export const fetchPublicPage = (publicPageId, history) => dispatch => {
  firestore
    .collection('public-pages')
    .doc(publicPageId)
    .get()
    .then(doc => {
      if (doc.exists) {
        dispatch(setCurrentPublicPage(doc.data()));
      } else {
        history.push('page-not-found');
      }
    })
    .catch(error => console.error('Error getting document:', error));
};
