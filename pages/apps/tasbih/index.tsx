import React, { useState } from 'react'
import styles from './tasbih.module.css'
import MyHeader from 'components/MyHeader'

export default function Tasbih() {
  const [tasbih, setTasbih] = useState(0)
  const [showTasbih, setShowTasbih] = useState(false)

  const handleButton = () => {
    navigator.vibrate(200)
    setTasbih(tasbih + 1)
    setShowTasbih(true)
    if (tasbih === 33) {
      setTasbih(0)
    }
  }
  const resetTasbih = () => {
    setTasbih(0)
  }
  return (
    <>
      <div className={styles['main']}>
        <MyHeader />
        <div className={styles['body']}>
          {showTasbih ? <h3>{tasbih}</h3> : <h3>Tasbih</h3>}
          <button onClick={handleButton}>klik</button>
          <span onClick={resetTasbih}>reset</span>
        </div>
      </div>
    </>
  )
}
