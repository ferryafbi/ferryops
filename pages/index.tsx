import React from 'react'
import styles from '../pages/styles/home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { GiKnifeThrust } from 'react-icons/gi'
import MyHeader from 'components/MyHeader'

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
      </Head>

      <div className={styles['container']}>
        <MyHeader />
        <main>
          <div className={styles['main']}></div>
        </main>
        <footer className={styles.footer}>
          <h1>Looking For New Adventure</h1>
          <div className={styles.contact}>
            {[
              { icon: FiMail, href: 'mailto:ferry.a.febian@gmail.com' },
              {
                icon: FaLinkedin,
                href: 'https://www.linkedin.com/in/ferry-ananda-febian',
              },
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <item.icon />
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </>
  )
}
