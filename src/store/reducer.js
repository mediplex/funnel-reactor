const reducer = (state = {} , action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'FETCH_CUSTOM_DOMAINS':
      return { ...state, customDomainNames: [...state.customDomainNames, action.payload] };
    case 'FETCH_PUBLIC_PAGE':
      return { ...state, publicPages: [...state.publicPages, action.payload] };
    case 'SET_CURRENT_CUSTOM_DOMAIN_NAME':
      return { ...state, currentCustomDomainName: action.payload };
    case 'SET_CURRENT_PUBLIC_PAGE':
      return { ...state, currentPublicPage: action.payload };
    default:
      // throw new Error();
      return state;
  }
};

export default reducer;
