import React, { useState, useEffect } from "react";
import Ditto from "./ditto";
import data from "./data";

const Page = props => {
  const [page, setPage] = useState(null);
  useEffect(() => {
    const pageId = props.match.params.id;
    setPage(data.pages.find((page)=> page.id === pageId ));
  }, [props]);

  return <Ditto data={page ? page.data.content : null} />;
};

export default Page;
