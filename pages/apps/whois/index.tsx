// import React, { useEffect, useState } from 'react'
// const dns = require('node:dns');
// // import dns from "dns/promises";

// export default function Whois() {
//     // async function get alamat
//   const getAlamat = async () => {
//     const address = await dns.lookup('ferryops.vercel.app')
//     return address
//   }

//   getAlamat()
//     .then((address) => {
//       console.info('alamat: ' + address.address)
//       console.info('family: ' + address.family)
//     })
//     .catch((error) => {
//       console.error('Terjadi kesalahan:', error)
//     })

//     const [address, setAddress] = useState(null);

//     useEffect(() => {
//         getAlamat()
//             .then((result) => {
//                 setAddress(result.address);
//             })
//             .catch((error) => {
//                 console.error("Terjadi kesalahan:", error);
//             });
//     }, []);

//   return (
//     <div>
//       <h1>{address}</h1>
//     </div>
//   )
// }
