import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/main.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.StrictMode>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <title>Wiput Pootong · Curriculum Vitae</title>
        <meta name='description' content='Wiput Pootong - Curriculum Vitae' />
        <meta name='theme-color' content='#212121' />
        <meta name='msapplication-navbutton-color' content='#212121' />
        <meta name='apple-mobile-web-app-status-bar-style' content='#212121' />
        <link href='favicon.png' rel='shortcut icon' />
        <link href='favicon.png' rel='apple-touch-icon-precomposed' />
      </Head>
      <Component {...pageProps} />
    </React.StrictMode>
  )
}
