import React from 'react'
import styles from '../pages/styles/home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaReact, FaLinkedin } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiLinux,
  SiGit,
  SiMysql,
} from 'react-icons/si'
import { FiMail } from 'react-icons/fi'
import { GiKnifeThrust } from 'react-icons/gi'

export default function Home() {
  return (
    <>
      <div className={styles['container']}>
        <header className={styles['header']}>
          <GiKnifeThrust style={{ width: '30', height: 'auto' }} />
          <div className={styles['nav']}>
            <h1>
              <Link href="/">Home</Link>
            </h1>
            <h1>
              <Link href="/posts">Posts</Link>
            </h1>
          </div>
        </header>
        <main>
          <div className={styles['main']}>
            <Image
              alt="image"
              src="https://media.licdn.com/dms/image/D5603AQHnIrHj0bKwkg/profile-displayphoto-shrink_200_200/0/1685506674738?e=1691625600&v=beta&t=skvZVv_PdWUygOvAsNL01bRz4NNtK5ZHx8nCU7OoWm0"
              className={styles['profile']}
            />
            <h1>Saya, Ferry Ananda Febian</h1>
            <h2>
              Seorang "pahlawan IT" yang bisa memecahkan masalah dengan sekali
              klik mouse
            </h2>
          </div>
          <div className={styles.tech}>
            <div>Tools</div>
            <div className={styles.tools}>
              {[
                FaReact,
                SiNextdotjs,
                SiTypescript,
                SiMysql,
                SiPostgresql,
                SiLinux,
                SiGit,
              ].map((Icon, index) => (
                <Icon key={index} className={styles['icon-tech']} />
              ))}
            </div>
          </div>
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
