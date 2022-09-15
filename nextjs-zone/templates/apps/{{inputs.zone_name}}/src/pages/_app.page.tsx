import { ThemeProvider } from '@citric/core'
import Head from 'next/head'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{{inputs.project_name}}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Project description"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export interface ZoneAppProps {
  sessionBasePath?: string
}

const AppWrapper = (props: AppProps) => {
  return (
    <ThemeProvider>
      <App {...props} />
    </ThemeProvider>
  )
}

export default AppWrapper
