import {
  SET_LOADING,
  SET_CURRENT_PUBLIC_PAGE,
  SET_CURRENT_CUSTOM_DOMAIN_NAME,
  ADD_BASIC_FORM,
  SET_BASIC_FORM_SUBMISSION_ERROR,
  SET_BASIC_FORM_SUBMITTED,
  SET_BASIC_FORM_SUBMITTING,
  SET_BASIC_FORM_LOADING
} from '../actions';

export const rootReducer = (state = {}, action) => {
  switch (action.type) {
    //! loading
    case SET_LOADING:
      return { ...state, loading: action.payload };
    //! customDomainName
    case SET_CURRENT_CUSTOM_DOMAIN_NAME:
      return { ...state, currentCustomDomainName: action.payload };
    //! publicPage
    case SET_CURRENT_PUBLIC_PAGE:
      return { ...state, currentPublicPage: action.payload };
    //! basicForm
    case ADD_BASIC_FORM:
      return { ...state, basicForms: { ...state.basicForms, ...action.payload } };
    case SET_BASIC_FORM_LOADING:
      return {
        ...state,
        basicFormStates: {
          ...state.basicFormStates,
          ...{
            [action.payload.basicFormId]: {
              ...state.basicFormStates[action.payload.basicFormId],
              loading: action.payload.basicFormLoading
            }
          }
        }
      };
    case SET_BASIC_FORM_SUBMITTING:
      return {
        ...state,
        basicFormStates: {
          ...state.basicFormStates,
          ...{
            [action.payload.basicFormId]: {
              ...state.basicFormStates[action.payload.basicFormId],
              submitting: action.payload.basicFormSubmitting
            }
          }
        }
      };
    case SET_BASIC_FORM_SUBMITTED:
      return {
        ...state,
        basicFormStates: {
          ...state.basicFormStates,
          ...{
            [action.payload.basicFormId]: {
              ...state.basicFormStates[action.payload.basicFormId],
              submitted: action.payload.basicFormSubmitted
            }
          }
        }
      };
    case SET_BASIC_FORM_SUBMISSION_ERROR:
      return {
        ...state,
        basicFormStates: {
          ...state.basicFormStates,
          ...{
            [action.payload.basicFormId]: {
              ...state.basicFormStates[action.payload.basicFormId],
              submissionError: action.payload.basicFormSubmissionError
            }
          }
        }
      };
    //! default
    default:
      // throw new Error();
      return state;
  }
};

export default rootReducer;
