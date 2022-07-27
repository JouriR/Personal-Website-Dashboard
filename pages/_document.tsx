import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html className="h-full bg-gray-100">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
