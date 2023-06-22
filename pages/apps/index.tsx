import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../pages/styles/home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { BsListTask } from 'react-icons/bs'
import MyHeader from 'components/MyHeader'

export default function Apps() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>ferryops | Apps</title>
        <meta name="description" content="ferryops | apps " />
        <meta
          name="keywords"
          content="ferry ananda febian, software engineer, next.js, react.js"
        />
        <meta name="author" content="admin ganteng" />
        <meta property="og:title" content="Beranda" />
        <meta property="og:description" content="ferryops | apps" />
        <meta
          property="og:image"
          content="https://www.ferryops.my.id/img/ferry.webp"
        />
        <meta property="og:url" content="https://www.ferryops.my.id" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={styles['container']}>
        <div className={styles['header-nav']}>
          <MyHeader />
        </div>
        <main>
          <div className={styles['main-apps']}>
            <div
              className={styles['list-apps']}
              onClick={() => router.push('/apps/pencatat-tugas')}
            >
              <BsListTask />
              <h1>Catat Tugas</h1>
              <span>Aplikasi pencatat tugas dengan media local storage</span>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <h1>ferryops.my.id | 2023</h1>
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
