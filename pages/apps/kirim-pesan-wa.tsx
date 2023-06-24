import MyHeader from 'components/MyHeader'
import React, { useState } from 'react'

export default function KirimPesanWa() {
  const [value, setValue] = useState<string>('')
  const [pesan, setPesan] = useState<string>('')
  const [inputActive, setInputActive] = useState(false)

  const sendWhatsapp = () => {
    const pesanOriginal = pesan
    const modifiedPesan = pesanOriginal.split(' ').join('+')
    if (value === undefined || value === null || value === '') {
      alert('Masukkan nomor')
      return
    }
    window.open(
      `https://api.whatsapp.com/send/?phone=${value}&text=${modifiedPesan}`
    )
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    setInputActive(true)
    if (e.target.value === ""){
      setInputActive(false)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <MyHeader />
      <div className="mb-2 mt-4 flex justify-center text-2xl">
        <h1>Kirim Pesan Wa</h1>
      </div>

      <div className="mb-2 flex w-full flex-col justify-center gap-4 px-8 lg:w-96">
        <input
          type="number"
          placeholder="62"
          className="rounded-md border-2 border-solid border-sky-500 p-3 outline-none"
          value={value}
          onChange={handleChange}
        />
        <textarea
          rows={5}
          className="rounded-md border-2 border-solid border-sky-500 p-3 outline-none"
          placeholder="pesan (opsional)"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          className={`h-auto rounded-full transition ease-in-out duration-700 ${
            inputActive
              ? 'bg-lime-600 hover:bg-lime-500 w-32'
              : 'bg-slate-400 text-white hover:bg-slate-600 w-16'
          }`}
          onClick={sendWhatsapp}
        >
          Kirim
        </button>
      </div>
    </div>
  )
}
