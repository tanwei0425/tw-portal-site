import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    console.log(ctx, 'ctx');
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }
  render() {
    return (
      <html>
        <Head>
          <style>
            {`body 
            { 
              margin: 0;
              min-width:1200px;
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
      </html>
    )
  }
}
export default MyDocument;