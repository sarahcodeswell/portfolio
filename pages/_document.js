import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Sarah Ritter — product leader, anthropologist, builder. Side projects made with Claude, Windsurf, Supabase, Git, and Vercel." />
        <meta property="og:title" content="Sarah Ritter — sarahcodeswell.com" />
        <meta property="og:description" content="Side projects built with Claude, Windsurf, Supabase, Git, and Vercel." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
