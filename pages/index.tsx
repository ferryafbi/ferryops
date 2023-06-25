import React from 'react'
import styles from '../pages/styles/home.module.css'
import Head from 'next/head'
import MyHeader from 'components/MyHeader'
import MyFooter from 'components/MyFooter'

export default function Home() {
  return (
    <>
      <Head>
        <title>ferryops | Home</title>
        <meta name="description" content="ferryops | blog " />
        <meta
          name="keywords"
          content="ferry ananda febian, software engineer, next.js, react.js"
        />
        <meta name="author" content="admin ganteng" />
        <meta property="og:title" content="Beranda" />
        <meta property="og:description" content="ferryops | blog" />
        <meta
          property="og:image"
          content="https://ferryops.vercel.app/img/ferry.webp"
        />
        <meta property="og:url" content="https://ferryops.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={styles['container']}>
        <MyHeader />
        <main>
          <div className={styles['main']}></div>
        </main>
        <MyFooter />
      </div>
    </>
  )
}
