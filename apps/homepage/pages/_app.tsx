import React from 'react'

import App, { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/main.css'

class NextApp extends App {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props as AppProps

    return (
      <>
        <Head>
          <title>Wiput Pootong - Software Engineer</title>
          <meta name='theme-color' content='#2d3748' />
          <meta name='description' content='I am Software Engineer...' />
          {/* <link rel='manifest' href='/manifest.webmanifest' /> */}
          <link rel='shortcut icon' href='/favicon.png' />
          <link rel='apple-touch-icon' href='/favicon.png' />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default NextApp
