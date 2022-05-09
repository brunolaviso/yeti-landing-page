import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    const description = 'Somos a Yeti, uma Agência de Marketing 360º criada por Growth Hackers. Somos especializados na produção de criativos que convertem! Criamos soluções disruptivas e personalizadas para nossos clientes e aceleramos o seu negócio!Be a legend, be remarkable. Be Yeti!'
    const pageImage = 'favicon.png'
    const pageTitle = 'Yeti | Início'
    const username = 'Yeti'
    return (
      <Html lang='pt-br'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&family=Roboto:wght@300&display=swap" rel="stylesheet" />

        <meta name="description" content={description} />
        <meta name="image" content={pageImage} />

        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#18C95F" />
        <meta name="msapplication-TileColor" content="#18C95F" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="google" content="notranslate" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:secure_url" content={pageImage} />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={username} />
        <meta name="twitter:creator" content={username} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:image:src" content={pageImage} />
        <meta name="twitter:image:alt" content="Thumbnail" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="620" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      </Html>
    )
  }
}