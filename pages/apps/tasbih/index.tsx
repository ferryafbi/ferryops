import React, { useState } from 'react'
import styles from './tasbih.module.css'
import MyHeader from 'components/MyHeader'
import Head from 'next/head'

export default function Tasbih() {
  const [tasbih, setTasbih] = useState(0)
  const [showTasbih, setShowTasbih] = useState(false)

  const handleButton = () => {
    navigator.vibrate(100)
    setTasbih(tasbih + 1)
    setShowTasbih(true)
    if (tasbih === 33) {
      navigator.vibrate(700)
      setTasbih(0)
    }
  }
  const resetTasbih = () => {
    setTasbih(0)
  }
  return (
    <>
      <Head>
        <title>Tasbih Online</title>
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

      <div className={styles['main']}>
        <MyHeader />
        <div className={styles['body']}>
          {showTasbih ? <h3>{tasbih}</h3> : <h3>Tasbih</h3>}
          <button onClick={handleButton}>klik</button>
          {showTasbih ? <span onClick={resetTasbih}>reset</span> : null}
        </div>
      </div>
    </>
  )
}
