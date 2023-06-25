import React from 'react'
import styles from '../pages/styles/home.module.css'
import Link from 'next/link'

export default function MyHeader() {
  return (
    <header className={styles['header']}>
      <div className={styles['nav']}>
        <h1>
          <Link href="/">Home</Link>
        </h1>
        <h1>
          <Link href="/posts">Posts</Link>
        </h1>
        <h1>
          <Link href="/apps">Apps</Link>
        </h1>
        <h1>
          <Link href="/repository">Repo</Link>
        </h1>
        <h1>
          <Link href="/resume">Resume</Link>
        </h1>
      </div>
    </header>
  )
}
