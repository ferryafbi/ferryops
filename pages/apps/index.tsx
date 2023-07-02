import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../pages/styles/home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { BiTask } from 'react-icons/bi'
import { AiOutlineNumber } from 'react-icons/ai'
import MyHeader from 'components/MyHeader'
import MyFooter from 'components/MyFooter'

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
          content="https://ferryops.vercel.app/img/ferry.webp"
        />
        <meta property="og:url" content="https://ferryops.vercel.app" />
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
              <BiTask />
              <h1>Catat Tugas</h1>
              <span>Aplikasi pencatat tugas dengan media local storage</span>
            </div>
            <div
              className={styles['list-apps']}
              onClick={() => router.push('/apps/tasbih')}
            >
              <AiOutlineNumber />
              <h1>Tasbih Online</h1>
              <span>Simple tasbih online dengan counter max 33</span>
            </div>
            <div
              className={styles['list-apps']}
              onClick={() => router.push('/apps/kirim-pesan-wa')}
            >
              <AiOutlineNumber />
              <h1>Kirim Pesan WA</h1>
              <span>Aplikasi kirim pesan whatsapp tanpa perlu save nomor penerima</span>
            </div>
          </div>
        </main>
       <MyFooter/>
      </div>
    </>
  )
}
