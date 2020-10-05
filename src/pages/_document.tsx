import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

type Props = {
  styleTags: any
}

class CustomDocument extends Document<Props> {
  static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
          <meta name="theme-color" content="#087da1" key="themeColor" />
          {this.props.styleTags}
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument