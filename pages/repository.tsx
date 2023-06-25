import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MyHeader from 'components/MyHeader'
import styles from '../pages/styles/home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Repository() {
  const [repos, setRepos] = useState([])
  const router = useRouter()

  useEffect(() => {
    axios
      .get('https://api.github.com/users/ferryops/repos')
      .then((response) => {
        setRepos(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <MyHeader />

      <div className={styles['main-github']}>
        <h1>Daftar Repository GitHub</h1>
        <div className={styles['container-github']}>
          {repos.map((repo) => (
            <div
              className={styles['box-github']}
              onClick={() => router.push(repo.html_url)}
            >
              <h3>
                <Link key={repo.id} href={repo.html_url}>
                  {repo.name}
                </Link>
              </h3>
              <span>Bahasa: {repo.language}</span>
              <span>Branch: {repo.default_branch}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
