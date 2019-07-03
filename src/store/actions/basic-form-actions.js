import firebase, { firestore } from '../../firebase';

export const ADD_BASIC_FORM = 'ADD_BASIC_FORM';
export const SET_BASIC_FORM_SUBMITTING = 'SET_BASIC_FORM_SUBMITTING';
export const SET_BASIC_FORM_SUBMITTED = 'SET_BASIC_FORM_SUBMITTED';
export const SET_BASIC_FORM_SUBMISSION_ERROR = 'SET_BASIC_FORM_SUBMISSION_ERROR';
export const SET_BASIC_FORM_LOADING = 'SET_BASIC_FORM_LOADING';

export const setBasicFormLoading = (basicFormLoading, basicFormId) => ({
  type: SET_BASIC_FORM_LOADING,
  payload: { basicFormLoading, basicFormId }
});

export const addBasicForm = basicForm => ({ type: ADD_BASIC_FORM, payload: basicForm });

export const setBasicFormSubmitting = (basicFormSubmitting, basicFormId) => ({
  type: SET_BASIC_FORM_SUBMITTING,
  payload: { basicFormSubmitting, basicFormId }
});

export const setBasicFormSubmitted = (basicFormSubmitted, basicFormId) => ({
  type: SET_BASIC_FORM_SUBMITTED,
  payload: { basicFormSubmitted, basicFormId }
});

export const setBasicFormSubmissionError = (basicFormSubmissionError, basicFormId) => ({
  type: SET_BASIC_FORM_SUBMISSION_ERROR,
  payload: { basicFormSubmissionError, basicFormId }
});

export const fetchBasicForm = basicformId => dispatch => {
  firestore
    .collection('basic-forms')
    .doc(basicformId)
    .get()
    .then(doc => {
      if (doc.exists) {
        dispatch(setBasicFormSubmitted(false, basicformId));
        dispatch(setBasicFormSubmitting(false, basicformId));
        dispatch(setBasicFormSubmissionError(false, basicformId));

        const newBasicForm = {};
        newBasicForm[basicformId] = doc.data();
        dispatch(addBasicForm(newBasicForm));
      } else {
        throw new Error();
      }
    })
    .catch(error => console.error('Error getting document:', error));
};

export const basicFormSubmitting = (basicFormId, listId, basicForm) => dispatch => {
  dispatch(setBasicFormSubmitting(true));
  firestore
    .collection('lists')
    .doc(listId)
    .update({
      contacts: firebase.firestore.FieldValue.arrayUnion(basicForm)
    })
    .then(() => {
      dispatch(setBasicFormSubmitting(false, basicFormId));
      dispatch(setBasicFormSubmitted(true, basicFormId));
    })
    .catch(error => dispatch(setBasicFormSubmissionError(true, basicFormId)));
};
