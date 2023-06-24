import MyHeader from 'components/MyHeader'
import React, { useState } from 'react'

export default function KirimPesanWa() {
  const [value, setValue] = useState<string>('')
  const [pesan, setPesan] = useState<string>('')
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
  return (
    <div className="flex flex-col items-center justify-center">
      <MyHeader />
      <div className="mb-2 mt-4 flex justify-center text-2xl">
        <h1>Kirim Pesan Wa</h1>
      </div>

      <div className="w-full mb-2 flex flex-col justify-center gap-4 lg:w-96 px-8">
        <input
          type="number"
          placeholder="62"
          className="rounded-md border-2 border-solid border-sky-500 p-3 outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
          className="h-auto w-24 rounded-full bg-slate-400 text-white hover:bg-slate-600"
          onClick={sendWhatsapp}
        >
          Kirim
        </button>
      </div>
    </div>
  )
}
