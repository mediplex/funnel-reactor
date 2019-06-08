import React, { useState, useEffect } from 'react';
import { hostname } from 'os';

import Elements from './elements';
import data from './data';
import customRedirects from './data/campusturkey.org/custom-redirects';

const Page = ({ match }) => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    let pageId = match.params.id;

    if (!pageId) {
      pageId = customRedirects
        .find(redirect => redirect.hostname === hostname())
        .redirects.find(redirect => redirect.from === '/').to;
    }

    // eslint-disable-next-line no-console
    console.log(new Date());
    // eslint-disable-next-line no-console
    console.log(pageId);

    setPage(data.pages.find(p => p.id === pageId));
  }, [match.params.id]);


  // TODO: page? renderPage : redirect NotFound
  return  page && <Elements elements={page.data.elements} />;
};

export default Page;
