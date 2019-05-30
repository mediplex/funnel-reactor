import React, { useState, useEffect } from "react";
import Ditto from "./ditto";
import data from "./data";
import { hostname } from "os";
import customRedirects from "./data/campusturkey.org/custom-redirects";

const Page = props => {
  const [page, setPage] = useState(null);
  useEffect(() => {
    let pageId = props.match.params.id;

    if (!pageId) {
      pageId = customRedirects
        .find(redirect => redirect.hostname === hostname())
        .redirects.find(redirect => redirect.from === "/").to;
    }

    console.log(new Date())
    console.log(pageId);

    setPage(data.pages.find(page => page.id === pageId));
  }, [props.match.params.id]);

  //TODO: page? renderPage : redirect NotFound
  return <Ditto data={page ? page.data.content : null} />;
};

export default Page;
