import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <style>
            {`body 
            { 
              margin: 0;
              font-size: 14px;
              line-height: 1.5;
              background: #fff;
             } /* custom! */`
            }
          </style>
        </Head>

        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument;