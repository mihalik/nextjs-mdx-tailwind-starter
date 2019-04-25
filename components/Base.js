import React from "react";
import NextSeo from "next-seo";

import "./Base.css";

export default ({ children, meta }) => (
  <>
    <NextSeo config={meta} />
    <div className="mx-auto max-w-md">
      <div className="px-4 py-16 shadow rounded bg-white">{children}</div>
    </div>
  </>
);
