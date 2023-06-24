import React, { useState } from 'react'

export default function KirimPesanWa() {
  const [value, setValue] = useState<string>('')
  const sendWhatsapp = () => {
    if (value === undefined || value === null || value === '') {
      alert('Masukkan nomor')
      return
    }
    window.open(
      `https://web.whatsapp.com/send/?phone=${value}&text&type=phone_number&app_absent=0`
    )
  }
  return (
    <>
      <div className="mb-2 flex justify-center ">
        <h1>Kirim Pesan Wa</h1>
      </div>
      <div className="mb-2 flex justify-center">
        <input
          type="text"
          placeholder="62"
          className="w-96 rounded-full border-2 border-solid border-sky-500 p-1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="w-24 rounded-full bg-slate-400 decoration-white"
          onClick={sendWhatsapp}
        >
          Kirim
        </button>
      </div>
    </>
  )
}
