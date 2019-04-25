import React from "react";
import { MDXProvider } from "@mdx-js/react";

import Base from "../components/Base";

export default ({ Component, pageProps }, state) => (
  <MDXProvider components={{ wrapper: Base }}>
    <Component {...pageProps} />
  </MDXProvider>
);
