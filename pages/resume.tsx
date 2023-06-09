import React, { useState, useEffect } from 'react'
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
import { NextPageContext } from 'next'
import parseUserAgent from '../pages/api/ua'
import Head from 'next/head'
import MyHeader from 'components/MyHeader'

interface ResumeProps {
  userAgent: string
}

export default function Resume({ userAgent }: ResumeProps) {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('/api/quotes')
        const data = await response.json()
        const { q } = data[0]
        setQuote(q)
      } catch (error) {
        console.error(error)
      }
    }

    fetchQuote()

    async function fetchData() {
      const result = await parseUserAgent(userAgent)
      const { browser, os, cpu } = result
      setBrowser(browser.name)
      setOsName(os.name)
      setCpuArchitecture(cpu.architecture)
    }

    fetchData()
  }, [userAgent])

  const experiences = [
    {
      company: 'PT Media Kreasi Abadi',
      position: 'Full Stack Developer',
      duration: 'Jan 2023 - Present',
      description:
        'Part of Magang Kampus Merdeka batch 4 (Design, implement, and test application features both on the frontend and backend).',
    },
    {
      company: 'Kominfo RI',
      position: 'Cyber Security Analyst',
      duration: 'Aug 2022 - Jan 2023',
      description:
        'Part of Magang Kampus Merdeka Batch 3 (Analyzing small and medium computer networks, designing enterprise computer networks, evaluating security alerts with SIEM, publishing scientific articles, and Cisco Certified Network Associate (CCNA) certification).',
    },
    {
      company: 'PT Telkom Regional VI Kalimantan',
      position: 'Back End Developer',
      duration: 'Apr 2022 - Jul 2022',
      description:
        'Part of Digistar Regional Internship (Develop bot telegram and develop web dashboard).',
    },
  ]

  const changeQuotes = () => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('/api/quotes')
        const data = await response.json()
        const { q } = data[0]
        setQuote(q)
      } catch (error) {
        console.error(error)
      }
    }

    fetchQuote()
  }

  const [browser, setBrowser] = useState('')
  const [osName, setOsName] = useState('')
  const [cpuArchitecture, setCpuArchitecture] = useState('')

  return (
    <>
      <Head>
        <title>ferryops | Resume</title>
        <meta name="description" content="ferryops | Resume " />
        <meta
          name="keywords"
          content="ferry ananda febian, software engineer, next.js, react.js"
        />
        <meta name="author" content="ferry ganteng" />
        <meta property="og:title" content="Beranda" />
        <meta property="og:description" content="ferryops | resume" />
        <meta
          property="og:image"
          content="https://ferryops.vercel.app/img/ferry.jfif"
        />
        <meta property="og:url" content="https://ferryops.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles['container']}>
        <MyHeader />
        <main>
          <div className={styles['main']}>
            <Image
              alt="image"
              src="https://media.licdn.com/dms/image/D5603AQFUEmyJEIoN5A/profile-displayphoto-shrink_400_400/0/1687662545967?e=1693440000&v=beta&t=-YVpK3cT4nMgZnSQ_HP0p0wyJ65-oxGJV_xohhJq6Dk"
              width={200}
              height={200}
              className={styles['profile']}
            />
            <h1>Saya, Ferry Ananda Febian</h1>
            <h2>
              Seorang &quot;pahlawan IT&quot; yang bisa memecahkan masalah
              dengan sekali klik mouse
            </h2>
            <h2 className={styles.quotes} onClick={changeQuotes}>
              {quote}
              <br />
              <span className="text-sm">
                Random quotes from https://zenquotes.io/api/quotes/
              </span>
            </h2>
            <span>
              Kamu pakai browser{' '}
              <span className={styles['underline']}>{browser}</span> dengan
              sistem operasi{' '}
              <span className={styles['underline']}>{osName}</span> dan
              arsitektur{' '}
              <span className={styles['underline']}>{cpuArchitecture}</span>.
            </span>
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
          <div className={styles['main-experience']}>
            <h2>Work Experience</h2>
            {experiences.map((experience, index) => (
              <div key={index} className={styles['experience']}>
                <div className={styles['experience-header']}>
                  <h3>{experience.position}</h3>
                  <h4>{experience.company}</h4>
                </div>
                <div className={styles['experience-content']}>
                  <p className={styles['duration']}>{experience.duration}</p>
                  <p>{experience.description}</p>
                </div>
              </div>
            ))}
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

Resume.getInitialProps = async (ctx: NextPageContext) => {
  const userAgent = ctx.req?.headers['user-agent'] || ''

  return {
    userAgent,
  }
}
