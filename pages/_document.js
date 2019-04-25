import Document, { Html, Head, Main, NextScript } from "next/document";

/*
NOTE:  This custom _document.js is only provided to add 'lang="en"'
attribute to html for accessability purposes (and 100% Lighthouse score).
*/

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
