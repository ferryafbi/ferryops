import MyHeader from 'components/MyHeader'
import React, { useState } from 'react'

export default function Kalkulator() {
  const [nilai, setNilai] = useState('0')

  const nol = () => {
    if (nilai === '0') {
      return
    }
    setNilai((prevNilai) => prevNilai + '0')
  }

  const satu = () => {
    if (nilai === '0') {
      setNilai('')
    }
    setNilai((prevNilai) => prevNilai + '1')
  }

  const dua = () => {
    if (nilai === '0') {
      setNilai('')
    }
    setNilai((prevNilai) => prevNilai + '2')
  }

  const tiga = () => {
    if (nilai === '0') {
      setNilai('')
    }
    setNilai((prevNilai) => prevNilai + '3')
  }

  const empat = () => {
    if (nilai === '0') {
      setNilai('')
    }
    setNilai((prevNilai) => prevNilai + '4')
  }

  const lima = () => {
    if (nilai === '0') {
      setNilai('')
    }
    setNilai((prevNilai) => prevNilai + '5')
  }

  const enam = () => {
    if (nilai === '0') {
      setNilai('')
    }
    setNilai((prevNilai) => prevNilai + '6')
  }

  const tujuh = () => {
    if (nilai === '0') {
      setNilai('')
    }
    setNilai((prevNilai) => prevNilai + '7')
  }

  const delapan = () => {
    if (nilai === '0') {
      setNilai('')
    }
    setNilai((prevNilai) => prevNilai + '8')
  }

  const sembilan = () => {
    if (nilai === '0') {
      setNilai('')
    }
    setNilai((prevNilai) => prevNilai + '9')
  }

  const add = () => {
    setNilai((prevNilai) => prevNilai + '+')
  }

  const min = () => {
    setNilai((prevNilai) => prevNilai + '-')
  }

  const time = () => {
    setNilai((prevNilai) => prevNilai + '*')
  }

  const division = () => {
    setNilai((prevNilai) => prevNilai + '/')
  }

  const ac = () => {
    setNilai('0')
  }

  const results = () => {
    setNilai(eval(nilai))
  }

  return (
    <>
      <MyHeader />
      <div className="container mx-auto h-auto w-96 border-4">
        <span className="flex h-16 justify-end bg-black px-2 py-4 text-3xl text-white">
          {nilai}
        </span>
        <div className="flex">
          <div className="container flex w-3/4 flex-col gap-4 p-4">
            <div className="flex gap-4">
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={add}
              >
                +
              </button>
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={min}
              >
                -
              </button>
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={time}
              >
                x
              </button>
            </div>
            <div className="flex gap-4">
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={tujuh}
              >
                7
              </button>
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={delapan}
              >
                8
              </button>
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={sembilan}
              >
                9
              </button>
            </div>
            <div className="flex gap-4">
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={empat}
              >
                4
              </button>
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={lima}
              >
                5
              </button>
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={enam}
              >
                6
              </button>
            </div>
            <div className="flex gap-4">
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={satu}
              >
                1
              </button>
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={dua}
              >
                2
              </button>
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={tiga}
              >
                3
              </button>
            </div>
            <div className="flex gap-4">
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={nol}
              >
                0
              </button>
              <button
                className="h-20 w-20 rounded border-2 hover:bg-slate-300"
                onClick={() => setNilai((prevNilai) => prevNilai + '.')}
              >
                .
              </button>
              <button
                className="h-20 w-20 rounded border-2 bg-red-400 text-white hover:bg-red-300"
                onClick={ac}
              >
                AC
              </button>
            </div>
          </div>
          <div className="container flex w-1/4 flex-col gap-4 p-2 py-4">
            <button
              className="h-20 w-20 rounded border-2 hover:bg-slate-300"
              onClick={division}
            >
              /
            </button>
            <button
              className="h-full w-20 rounded border-2 bg-blue-400 text-white hover:bg-blue-300"
              onClick={results}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
