import React from 'react'
import styles from '../pages/styles/home.module.css'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export default function MyFooter() {
  return (
    <footer className={styles.footer}>
      <h1>ferryops.vercel.app | 2023</h1>
      <Link href={'https://ferryops.vercel.app/sitemap.xml'} className='underline text-blue-500'>sitemap</Link>
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
  )
}
