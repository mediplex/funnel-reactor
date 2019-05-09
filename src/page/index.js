import React, { useState, useEffect } from "react";
import Ditto from "./ditto";
import data from "./_data";

const Page = () => {
    const [page, setPage] = useState(null);
  useEffect((() => {
      // ! the id is coming from the router... the effect maybe coming from redux!
      setPage(data.pages.find(page => (page.id = 'page-1')));
    }),[]);

    return <Ditto data={page? page.data.content : null} />;
};

export default Page;
