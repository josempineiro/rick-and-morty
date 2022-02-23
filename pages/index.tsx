import Head from 'next/head'
import Link from 'next/link'

function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty home page</title>
      </Head>
      <section>Rick and Morty home page</section>
      <Link href="/characters">
        <a>Characters</a>
      </Link>
    </>
  )
}

export default Home
