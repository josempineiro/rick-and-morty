import Head from 'next/head'
import Image from 'next/image'
import styles from './Layout.module.css'
import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
  home?: boolean
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Rick and Morty webpage" />
        <meta property="og:image" content="/images/logo.svg" />
        <meta name="og:title" content="Rick and Morty" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <Image
              priority
              src="/images/profile.jpg"
              height={108}
              width={108}
            />
          </a>
        </Link>
        <h2>
          <Link href="/">
            <a>Home</a>
          </Link>
        </h2>
      </header>
      <main>{children}</main>
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </div>
  )
}
