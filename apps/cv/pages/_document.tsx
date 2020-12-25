import React from 'react'

import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'

class NextDocument extends Document {
  public static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  public render(): React.ReactElement {
    return (
      <Html lang='en'>
        <Head />
        <body className='bg-gray-50'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextDocument
