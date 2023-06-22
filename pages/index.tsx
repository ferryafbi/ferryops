import React from 'react'
import styles from '../pages/styles/home.module.css'
import Head from 'next/head'
import MyHeader from 'components/MyHeader'
import MyFooter from 'components/MyFooter'
import Script from 'next/script'

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
          content="https://www.ferryops.my.id/img/ferry.webp"
        />
        <meta property="og:url" content="https://www.ferryops.my.id" />
        <meta name="twitter:card" content="summary_large_image" />

        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
        </Script>
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
