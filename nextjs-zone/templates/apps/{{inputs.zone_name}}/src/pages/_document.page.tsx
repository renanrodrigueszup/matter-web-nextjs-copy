// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { createElement } from 'react'
import { ServerStyleSheet } from 'styled-components'

const fonts = [
  'https://fonts.googleapis.com/css2?',
  'family=Montserrat:wght@300;400;500;600;700&',
  'family=Roboto+Mono:wght@300;400;500;600;700&',
  'family=Roboto:wght@300;400;500;700&',
  'display=swap',
]

const ZoneDocument = () => (
  <Html lang="pt">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href={fonts.join('')} rel="stylesheet" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

ZoneDocument.getInitialProps = async function getInitialProps(ctx: DocumentContext): Promise<{
  styles: JSX.Element
  html: string
  head?: Array<JSX.Element | null>
}> {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(createElement(App, props)),
      })

    const initialProps = await NextDocument.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: createElement(Html, { lang: 'pt' }, [initialProps.styles, sheet.getStyleElement()]),
    }
  } finally {
    sheet.seal()
  }
}

export default ZoneDocument
