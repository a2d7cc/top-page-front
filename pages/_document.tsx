import Document, {
  Html,
  DocumentContext,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="ru">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
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