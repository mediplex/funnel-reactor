import React, { useState, useEffect } from 'react';

import { docData } from 'rxfire/firestore';
import { switchMap, tap, map } from 'rxjs/operators';
import { hostname } from 'os';
import { firestore } from '../firebase';

import Elements from './elements';

// import './data';

const PublicPage = ({ match, history }) => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    const customDomainRef = firestore.collection('custom-domains').doc(hostname());
    const customDomain$ = docData(customDomainRef);

    const subscription = customDomain$
      .pipe(
        tap(customDomain => {
          if (!customDomain.customPagePointers) history.push('/page-not-found');
        }),
        map(({ customPagePointers }) => customPagePointers.find(p => p.path === (match.params.slug || ''))),
        tap(customPagePointer => {
          if (!customPagePointer) history.push('/page-not-found');
        }),
        tap(customPagePointer => {
          if (!customPagePointer.path) history.push('/page-not-found');
        }),
        switchMap(({ publicPageId }) => {
          const publicPageRef = firestore.collection('public-pages').doc(publicPageId);
          const publicPage$ = docData(publicPageRef);
          return publicPage$;
        }),
        tap(publicPage => {
          if (!publicPage.data) history.push('/page-not-found');
        })
      )
      .subscribe(publicPage => setPage(publicPage), error => console.log(error));

    return () => subscription.unsubscribe();
  }, [match, history]);

  return page && <Elements elements={page.data.elements} />;
};

export default PublicPage;
